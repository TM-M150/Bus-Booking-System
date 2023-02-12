import express from "express";
import BusTypes from "../models/bustypes.js";

const router = express.Router();

// CREATE
router.post("/", async function (req, res) {
  const newBusTypes = new BusTypes(req.body);

  try {
    const savedBusTypes = await newBusTypes.save();
    res.status(200).json(savedBusTypes);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
router.put("/:id", async function (req, res) {
  try {
    const updateBusTypes = await BusTypes.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateBusTypes);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE
router.delete("/:id", async function (req, res) {
  try {
    await BusTypes.findByIdAndDelete(req.params.id);
    res.status(200).json("Bus Successfully Deleted.");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET
router.get("/:id", async function (req, res) {
  try {
    const BusType = await BusTypes.findById(req.params.id);
    res.status(200).json(BusType);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL
router.get("/", async function (req, res) {
  try {
    const BusTypess = await BusTypes.find();
    res.status(200).json(BusTypess);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
