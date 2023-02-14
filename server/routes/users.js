import express from "express";
import {
  deleteUser,
  getallUser,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// AUTHENTICATION
/*router.get("/checkauthentication", verifyToken, function (req, res, next) {
  res.send("hello user, you are logged in");
});

router.get("/checkuser/:id", verifyUser, function (req, res, next) {
  res.send("hello user, you are logged in and you can delete your account");
});

router.get("/checkadmin/:id", verifyAdmin, function (req, res, next) {
  res.send("hello admin, you are logged in and you can delete all accounts");
});*/

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getUser);

// GET ALL
router.get("/", verifyAdmin, getallUser);

export default router;
