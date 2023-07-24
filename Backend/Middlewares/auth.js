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


export const authorizeAdmin = catchAsyncError((req,res,next) => {
   
    if(req.user.role !== "admin")
      return next(new errorHandlerUtils("You are not allowed to access this", 403))
    next()
})


export const authorizeSubscribers = catchAsyncError((req,res,next) => {
   
    if(req.user.subscription.status !== "active"  &&  req.user.role !== "admin")
      return next(new errorHandlerUtils("Only subscribers can access this", 403))
    next()
})