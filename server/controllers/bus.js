import Bus from "../models/bus.js";
import Route from "../models/road.js"

export const createBus = async function (req, res, next) {
  const routeID = req.params.routeid;
  const newBus = new Bus(req.body);

  try {
    const savedBus = await newBus.save();
    try {
      await Route.findByIdAndUpdate(routeID, {
        $push: { Busses: savedBus._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedBus);
  } catch (err) {
    next(err);
  }
};

export const updateBus = async function (req, res, next) {
  try {
    const updateBus = await Bus.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateBus);
  } catch (err) {
    next(err);
  }
};

export const deleteBus = async function (req, res, next) {
  const routeID = req.params.routeid;

  try {
    await Bus.findByIdAndDelete(req.params.id);
    try {
      await Route.findByIdAndUpdate(routeID, {
        $pull: { Busses: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Bus Successfully Deleted.");
  } catch (err) {
    next(err);
  }
};

export const getBus = async function (req, res, next) {
  try {
    const getBus = await Bus.findById(req.params.id);
    res.status(200).json(getBus);
  } catch (err) {
    next(err);
  }
};

export const getBusses = async function (req, res, next) {
  try {
    const getBusses = await Bus.find();
    res.status(200).json(getBusses);
  } catch (err) {
    next(err);
  }
};
