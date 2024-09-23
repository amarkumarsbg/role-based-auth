import express from "express";
import verifyToken from "../middleware/authMiddleware.js";
const router = express.Router();
import { authorizeRoles } from "../middleware/roleMiddleware.js";

//only admin can access this router
router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});

//Both  admin and manager can access this router
router.get(
  "/manager",
  verifyToken,
  authorizeRoles("admin", "manager"),
  (req, res) => {
    res.json({ message: "Welcome Manager" });
  }
);

//All can access this router
router.get(
  "/user",
  verifyToken,
  authorizeRoles("admin", "manager", "user"),
  (req, res) => {
    res.json({ message: "Welcome User" });
  }
);

export default router;
