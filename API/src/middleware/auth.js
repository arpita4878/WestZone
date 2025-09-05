import jwt from "jsonwebtoken";
import Users from "../models/user.model.js"; 

// Middleware: Check if user is authenticated
export const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; 
    if (!token) {
      return res.status(401).json({ status: false, message: "Not authorized, no token" });
    }

    const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
    req.user = await Users.findById(decoded.id).select("-password");

    if (!req.user) {
      return res.status(401).json({ status: false, message: "User not found" });
    }

    next();
  } catch (err) {
    res.status(401).json({ status: false, message: "Token failed" });
  }
};

// Middleware: Restrict access by role
export const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        status: false,
        message: "You do not have permission to perform this action",
      });
    }
    next();
  };
};

      