import user from "../model/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const Sathish = "I am Sathish";

export const userData = async (req, res) => {
  const userInfo = req.body;
  console.log(userInfo);

  try {
    const userDetails = await user.findOne({ email: userInfo.email });

    if (!userDetails) {
      return res.status(203).send("Invalid Username Or Password");
    }

    const isPasswordValid = await bcrypt.compare(
      userInfo.password,
      userDetails.password
    );

    if (isPasswordValid) {
      const userTokenData = {
        Name: userDetails.name,
        Email: userDetails.email,
        MobileNumber: userDetails.mobilenumber,
        City: userDetails.city,
        journey: userDetails.journey,
      };
      const token = jwt.sign(userTokenData, Sathish, { expiresIn: "1h" });
      res.send([
        {
          Name: userDetails.name,
          Email: userDetails.email,
          MobileNumber: userDetails.mobilenumber,
          City: userDetails.city,
          journey: userDetails.journey,
        },
        {
          token: token,
        },
      ]);
    } else {
      res.status(203).send("Invalid Username Or Password");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(`Internal Server Error ${error.message}`);
  }
};

export const addUser = async (req, res) => {
  console.log(req.body);
  try {
    console.log(req.body);
    const newUser = await user.create(req.body);
    const hash = await bcrypt.hash(newUser.password, 10);

    newUser.password = hash;
    await newUser.save();

    res.send("User Created SucessFully");
  } catch (error) {
    if (error.code === 11000) res.send("Email Id Already Exist");
    else res.status(500).send(`Internal Server Error ${error.message}`);
  }
};

export const auth = async (req, res, next) => {
  try {
    console.log(req.headers.authorization);
    const decodedToken = jwt.verify(req.headers.authorization, Sathish);
    console.log(decodedToken);
    res.send(decodedToken);
    next();
  } catch (error) {
    return res.status(203).json({ message: "Auth failed" });
  }
};
