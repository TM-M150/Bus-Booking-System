import Route from "../models/road.js";
import Bus from "../models/bus.js";

export const createRoute = async function (req, res, next) {
  const BusID = req.params.Busid;
  const newRoute = new Route(req.body);

  try {
    const savedRoute = await newRoute.save();
    try {
      await Bus.findByIdAndUpdate(BusID, {
        $push: { Route: savedRoute._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoute);
  } catch (err) {
    next(err);
  }
};

export const updateRoute = async function (req, res, next) {
  try {
    const updateRoute = await Route.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateRoute);
  } catch (err) {
    next(err);
  }
};

export const deleteRoute = async function (req, res, next) {
  const BusID = req.params.Busid;

  try {
    await Route.findByIdAndDelete(req.params.id);
    try {
      await Bus.findByIdAndUpdate(BusID, {
        $pull: { Route: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Route Successfully Deleted.");
  } catch (err) {
    next(err);
  }
};

export const getRoute = async function (req, res, next) {
  try {
    const getRoute = await Route.findById(req.params.id);
    res.status(200).json(getRoute);
  } catch (err) {
    next(err);
  }
};

export const getRoutes = async function (req, res, next) {
  try {
    const getRoute = await Route.find();
    res.status(200).json(getRoutes);
  } catch (err) {
    next(err);
  }
};
