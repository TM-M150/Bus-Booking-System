import express, { Router } from "express";
import {
  createUser,
  deleteUser,
  getallUser,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// AUTHENTICATION
router.get("/authetication", verifyToken, function (req, res, next) {
  res.send("Hello user. you are logged in");
});

router.get("/checkuser/:id", verifyUser, function (req, res, next) {
  res.send("Hello user. you are logged in and you can delete your account");
});

router.get("/checkadmin/:id", verifyAdmin, function (req, res, next) {
  res.send("Hello admin. you are logged in and you can delete all accounts");
});

// CREATE
router.post("/", verifyAdmin, createUser);

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getUser);

// GET ALL
router.get("/", verifyAdmin, getallUser);

export default router;
