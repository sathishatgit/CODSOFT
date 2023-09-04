import BusBooking from "../model/busSchema.js";
import user from "../model/userSchema.js";

export const booking = async (req, res) => {
  try {
    const { values, userData } = req.body;
    // console.log(userData);

    const existingBooking = await BusBooking.findOne();
    const dbUserinfo = await user.findOne({ email: userData.Email });
    console.log(dbUserinfo);
    const formattedDate = values.Date;

    if (!existingBooking) {
      const newBus = new BusBooking({
        Chennai: [],
        Coimbatore: [],
        Trichy: [],
      });
      await newBus.save();
    }
    if (!dbUserinfo) {
      dbUserinfo.journey.push({
        date: formattedDate,
        seatsBooked: values.Seats,
        route: values.To,
      });
      await dbUserinfo.save();
    } else {
      const userBookingCheck = dbUserinfo.journey.find(
        (entry) => entry.date === formattedDate
      );
      if (!userBookingCheck) {
        dbUserinfo.journey.push({
          date: formattedDate,
          seatsBooked: values.Seats,
          route: values.To,
        });
        await dbUserinfo.save();
      } else {
        res.status(200).json({ message: "USer Limit End On That Day" });
        return;
      }
    }
    const updatedBooking = await BusBooking.findOne();
    // const userBooking=await user.findOne()
    // console.log(updatedBooking);
    // console.log(values);
    const available = updatedBooking[values.To].find(
      (entry) => entry.date === formattedDate
    );

    if (!available) {
      updatedBooking[values.To].push({
        date: formattedDate,
        seatsBooked: values.Seats,
      });
      await updatedBooking.save();
      res.status(200).json({
        message: "Seats Booking Confirmed Happy Journey!",
        update: dbUserinfo.journey,
      });
    } else {
      const totalSeats = available.seatsBooked + values.Seats;
      // console.log(totalSeats);
      if (totalSeats >= 46) {
        res.status(200).json({
          message: "Not enough seats available. Choose a Another Date.",
        });
      } else {
        available.seatsBooked = totalSeats;
        await updatedBooking.save();
        res.status(200).json({ message: "Seats Booking Confirmed" });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
