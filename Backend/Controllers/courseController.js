import { catchAsyncError } from "../Middlewares/catchAsyncError.js"
import {Course} from "../Models/Course.js";
import errorHandlerUtils from "../Utils/errorHandlerUtils.js"

export const getAllCourses = catchAsyncError( async(req,res,next) => {
    const courses = await Course.find().select("-lectures");
    res.status(200).json({
        success: true,
        courses
    });
}  );


export const createCourse = catchAsyncError( async(req,res,next) => {
    
    const {title , description , createdBy ,category} = req.body; 

    // const file = req.file;

    if(!title || !description || !createdBy || !category) 
    return next(new errorHandlerUtils("Please add all fields" ,400) );

    await Course.create( 
        {title , description , createdBy ,category, 
        poster : {
            public_id : "temp",
            url : "temp"
        } } );


    res.status(201).json({
        success: true,
        message : "Course created successsfully. You can add lectures now"
    });
}  );