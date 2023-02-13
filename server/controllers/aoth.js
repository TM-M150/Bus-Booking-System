import User from "../models/users.js";

export const register = async function (req, res, next) {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
    });

    await newUser.save();
    res.status(200).send("User created successfully.");
  } catch (err) {
    next(err);
  }
};
