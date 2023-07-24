import Razorpay from "razorpay";
import app from "./app.js";
import { connectDB } from "./Config/database.js";
import cloudinary from "cloudinary";
import RazorPay from "razorpay"; 

connectDB();

cloudinary.v2.config({
    cloud_name : process.env.CLOUD_NAME,
    api_key : process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})

export var instance = new RazorPay({
    key_id: process.env.RAZ_API_KEY,
    key_secret: process.env.RAZ_API_SECRET,
  });

app.listen(process.env.PORT , () => {
    console.log(`server started at ${process.env.PORT}`)
}) 