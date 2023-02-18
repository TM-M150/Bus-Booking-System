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
router.post("/:userid", verifyUser, createAddress);

// UPDATE
router.put("/:id", verifyUser, updateAddress);

// DELETE
router.delete("/:id/:userid", verifyUser, deleteAddress);

// GET
router.get("/:id", verifyUser, getAddress);

// GET ALL
router.get("/", verifyAdmin, getAddresses);

export default router;
