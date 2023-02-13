import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = function (req, res, next) {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated"));
  }

  jwt.verify(token, process.env.JWT, function (err, user) {
    if (err) return next(createError(403, "Token ins invalid"));
    req.user = user;
  });
};

export const verifyUser = function (req, res, next) {
  verifyToken(req, res, next, function () {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized"));
    }
  });
};

export const verifyAdmin = function (req, res, next) {
  verifyToken(req, res, next, function () {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized"));
    }
  });
};