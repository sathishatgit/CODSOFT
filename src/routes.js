import { Routes, Route, useNavigate } from "react-router-dom/dist";
import Signin from "./Pages/signin";
import Signup from "./Pages/signup";
import { useEffect } from "react";
import axios from "axios";
import Home from "./Pages/Home";
import { initial } from "./redux/storeData";
import Booking from "./Pages/Booking";
function Router() {
  console.log(localStorage.getItem("Token"));
  const navi = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        let config = {
          method: "get",
          url: "http://localhost:5000/users",
          headers: {
            authorization: JSON.parse(localStorage.getItem("Token")),
          },
        };
        const userData = await axios(config);
        if (userData.status === 200) {
          initial.logged = true;
          initial.login.succes = userData.data;
          navi("/");
        }
        console.log(userData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {!initial.logged ? (
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      )}
    </>
  );
}

export default Router;
