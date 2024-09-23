import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
dotenv.config();

//Middleware
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

//Server
const PORT = process.env.PORT || 7002;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);

  connectDB();
});
