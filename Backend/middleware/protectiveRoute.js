import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectiveRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_KEY);

    if (!decoded) return res.status(401).json({ error: "Ivalid Token" });

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) return res.status(401).json({ error: "User not found" });
    req.user = user;
    next();
  } catch (error) {
    console.log("Internal server error", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default protectiveRoute;
