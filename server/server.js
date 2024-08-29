import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

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
