import User from "../models/user.js";

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
    res.status(200).json("User Successfully Deleted.");
  } catch (err) {
    next(err);
  }
};

export const getUser = async function (req, res, next) {
  try {
    const getUser = await User.findById(req.params.id);
    res.status(200).json(getUser);
  } catch (err) {
    next(err);
  }
};

export const getUsers = async function (req, res, next) {
  try {
    const Users = await User.find();
    res.status(200).json(Users);
  } catch (err) {
    next(err);
  }
};
