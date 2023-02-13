import BusTypes from "../models/bustypes.js";

export const createBusTypes = async function (req, res, next) {
  const newBusTypes = new BusTypes(req.body);

  try {
    const savedBusTypes = await newBusTypes.save();
    res.status(200).json(savedBusTypes);
  } catch (err) {
    next(err);
  }
};

export const updateBusTypes = async function (req, res, next) {
  try {
    const updateBusTypes = await BusTypes.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateBusTypes);
  } catch (err) {
    next(err);
  }
};

export const deleteBusTypes = async function (req, res, next) {
  try {
    await BusTypes.findByIdAndDelete(req.params.id);
    res.status(200).json("Bus Successfully Deleted.");
  } catch (err) {
    next(err);
  }
};

export const getBusTypes = async function (req, res, next) {
  try {
    const BusType = await BusTypes.findById(req.params.id);
    res.status(200).json(BusType);
  } catch (err) {
    next(err);
  }
};

export const getallBusTypes = async function (req, res, next) {
  try {
    const BusTypess = await BusTypes.find();
    res.status(200).json(BusTypess);
  } catch (err) {
    next(err);
  }
};
