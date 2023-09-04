import mongoose from "mongoose";
const busBookingSchema = new mongoose.Schema({
  Chennai: [
    {
      date: String,
      seatsBooked: Number,
    },
  ],
  Coimbatore: [
    {
      date: String,
      seatsBooked: Number,
    },
  ],
  Trichy: [
    {
      date: String,
      seatsBooked: Number,
    },
  ],
});

const BusBooking = mongoose.model("BusBooking", busBookingSchema);

export default BusBooking;
