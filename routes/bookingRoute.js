import Express from "express";
import { booking } from "../controller/bookingController.js";

const bus = Express.Router();

bus.post("/", booking);

export default bus;
