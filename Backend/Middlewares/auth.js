import jwt from "jsonwebtoken";
import { catchAsyncError } from "./catchAsyncError.js";
import errorHandlerUtils from "../Utils/errorHandlerUtils.js";
import { User } from "../Models/User.js";


export const isAuthenticated = catchAsyncError( async (req,res,next) => {
    const {token }= req.cookies;

    // console.log(token )

  
    if(!token)
    return next(new errorHandlerUtils("Not logged in", 401));

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user =  await User.findById(decoded._id);

    next(); 
})