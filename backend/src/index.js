import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import authroute from "./routes/AuthRoutes.js";
import cookieParser from 'cookie-parser'
import cors from 'cors'
import blogroute from "./routes/BlogRoute.js";

dotenv.config();

const app = express();

connectDb();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://dailytask-dashboard.vercel.app"
  ],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());



app.get("/", (req, res) => {
  res.json({ message: "Server running successfully" });
});

// Routes
app.use('/api/v1/auth', authroute);
app.use('/api/v1/blog', blogroute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});



