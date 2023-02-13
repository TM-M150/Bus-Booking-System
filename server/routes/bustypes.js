import express from "express";
import {
  createBusTypes,
  deleteBusTypes,
  getallBusTypes,
  getBusTypes,
  updateBusTypes,
} from "../controllers/bustypes.js";

const router = express.Router();

// CREATE
router.post("/", createBusTypes);

// UPDATE
router.put("/:id", updateBusTypes);

// DELETE
router.delete("/:id", deleteBusTypes);

// GET
router.get("/:id", getBusTypes);

// GET ALL
router.get("/", getallBusTypes);

export default router;
