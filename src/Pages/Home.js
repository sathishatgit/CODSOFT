import React from "react";
import "../Assets/Styles/Login.css";
import UserDeatils from "../components/UserDeatils";

function Home() {
  return (
    <div className="SignUpLayout">
      <h1 className="animate-charcter">SS Travels Ticket Booking</h1>
      <UserDeatils />
    </div>
  );
}

export default Home;
