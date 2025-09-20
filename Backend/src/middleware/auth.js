import jwt from "jsonwebtoken";
import Users from "../models/user.model.js"; 

// Middleware: Check if user is authenticated

export async function protect(req, res, next) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
    const user = await Users.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" ,err});
  }
}

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


      