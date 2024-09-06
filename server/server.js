import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import path from 'path';

dotenv.config();
const app = express();
app.use(cookieParser());
app.use(express.json());

const __dirname = path.resolve()
app.use(express.static(path.join(__dirname,'/client/dist')))

app.get('*',(req,res) =>
{
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});


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

