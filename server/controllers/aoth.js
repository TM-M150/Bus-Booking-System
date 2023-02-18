import User from "../models/user.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async function (req, res, next) {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.Password, salt);

    const newUser = new User({
      Name: req.body.Name,
      Email: req.body.Email,
      Password: hash,
      PhoneNumber: req.body.PhoneNumber,
    });

    await newUser.save();
    res.status(200).send("User created successfully.");
  } catch (err) {
    next(err);
  }
};

export const login = async function (req, res, next) {
  try {
    const user = await User.findOne({ Email: req.body.Email });
    if (!user) return next(createError(404, "User does not exist!"));

    const isPasswordCorrect = await bcrypt.compareSync(
      req.body.Password,
      user.Password
    );
    if (!isPasswordCorrect)
      return next(createError(404, "Password is Incorrect!"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { Password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};
