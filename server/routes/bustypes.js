import express from "express";
import {
  createBusTypes,
  deleteBusTypes,
  getallBusTypes,
  getBusTypes,
  updateBusTypes,
} from "../controllers/bustypes.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createBusTypes);

// UPDATE
router.put("/:id", verifyAdmin, updateBusTypes);

// DELETE
router.delete("/:id", verifyAdmin, deleteBusTypes);

// GET
router.get("/:id", getBusTypes);

// GET ALL
router.get("/", getallBusTypes);

export default router;
