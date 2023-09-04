import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  mobilenumber: {
    type: Number,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  journey: [
    {
      date: String,
      seatsBooked: Number,
      route: String,
    },
  ],
});

const user = mongoose.model("user", userSchema);

export default user;
