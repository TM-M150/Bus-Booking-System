import Address from "../models/address.js";
import User from "../models/user.js";

export const createAddress = async function (req, res, next) {
  const userID = req.params.userid;
  const newAddress = new Address(req.body);

  try {
    const savedAddress = await newAddress.save();
    try {
      await User.findByIdAndUpdate(userID, {
        $push: { Addresses: savedAddress._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedAddress);
  } catch (err) {
    next(err);
  }
};

export const updateAddress = async function (req, res, next) {
  try {
    const updateAddress = await Address.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateAddress);
  } catch (err) {
    next(err);
  }
};

export const deleteAddress = async function (req, res, next) {
  const userID = req.params.userid;

  try {
    await Address.findByIdAndDelete(req.params.id);
    try {
      await User.findByIdAndUpdate(userID, {
        $pull: { Addresses: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Address Successfully Deleted.");
  } catch (err) {
    next(err);
  }
};

export const getAddress = async function (req, res, next) {
  try {
    const getaddress = await Address.findById(req.params.id);
    res.status(200).json(getaddress);
  } catch (err) {
    next(err);
  }
};

export const getAddresses = async function (req, res, next) {
  try {
    const Addresses = await Address.find();
    res.status(200).json(Addresses);
  } catch (err) {
    next(err);
  }
};
