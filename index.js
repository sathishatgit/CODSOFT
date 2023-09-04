import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/usersRoute.js";
import bus from "./routes/bookingRoute.js";

mongoose
  .connect("mongodb://127.0.0.1:27017/busBooking")
  .then(() => console.log("Mongo is Connected"))
  .catch((error) => console.log(error.message));

const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Connected"));

app.use("/users", userRoute);
app.use("/bus", bus);

app.listen(PORT, () => console.log(`Server Connected At ${PORT}`));
