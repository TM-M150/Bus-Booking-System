import express from "express";
import {
  createRoute,
  deleteRoute,
  getRoute,
  getRoutes,
  updateRoute,
} from "../controllers/road.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createRoute);

// UPDATE
router.put("/:id", verifyAdmin, updateRoute);

// DELETE
router.delete("/:id", verifyAdmin, deleteRoute);

// GET
router.get("/:id", getRoute);

// GET ALL
router.get("/", getRoutes);

export default router;
