import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

app.use(cookieParser());

app.use(express.json());

mongoose.connect(process.env.MONGODB_URL).then(()=>
{
    console.log("Connected to Mongodb server.");
})
.catch((err)=>
{
    console.log(err);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server listening on port 3000");
});

app.use("/server/user", userRoutes)
app.use("/server/auth", authRoutes)


app.use((err, req, res, next)=>
{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode
  })
})

