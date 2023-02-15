import express from "express";
import {
  createBus,
  deleteBus,
  getBus,
  getBusses,
  updateBus,
} from "../controllers/bus.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createBus);

// UPDATE
router.put("/:id", verifyAdmin, updateBus);

// DELETE
router.delete("/:id", verifyAdmin, deleteBus);

// GET
router.get("/:id", getBus);

// GET ALL
router.get("/", getBusses);

export default router;
