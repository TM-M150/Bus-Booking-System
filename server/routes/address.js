import express from "express";
import {
  createAddress,
  deleteAddress,
  getAddress,
  updateAddress,
  getAddresses,
} from "../controllers/address.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/:Userid", verifyUser, verifyAdmin, createAddress);

// UPDATE
router.put("/:id", verifyUser, verifyAdmin, updateAddress);

// DELETE
router.delete("/:id/:Userid", verifyUser, verifyAdmin, deleteAddress);

// GET
router.get("/:id", verifyUser, verifyAdmin, getAddress);

// GET ALL
router.get("/", verifyAdmin, getAddresses);

export default router;
