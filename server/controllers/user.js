import User from "../models/users.js";

export const createUser = async function (req, res, next) {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async function (req, res, next) {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async function (req, res, next) {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("Bus Successfully Deleted.");
  } catch (err) {
    next(err);
  }
};

export const getUser = async function (req, res, next) {
  try {
    const BusType = await User.findById(req.params.id);
    res.status(200).json(BusType);
  } catch (err) {
    next(err);
  }
};

export const getallUser = async function (req, res, next) {
  try {
    const Users = await User.find();
    res.status(200).json(Users);
  } catch (err) {
    next(err);
  }
};
