import { catchAsyncError } from "../Middlewares/catchAsyncError.js"
import {Course} from "../Models/Course.js";
import getDataUri from "../Utils/dataUri.js";
import errorHandlerUtils from "../Utils/errorHandlerUtils.js";
import cloudinary from "cloudinary"; 

export const getAllCourses = catchAsyncError( async(req,res,next) => {
    const courses = await Course.find().select("-lectures");
    res.status(200).json({
        success: true,
        courses
    });
}  );


export const createCourse = catchAsyncError( async(req,res,next) => {
    
    const {title , description , createdBy ,category} = req.body; 

    const file = req.file;

    const fileUri = getDataUri(file);
  
    const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);


    if(!title || !description || !createdBy || !category) 
    return next(new errorHandlerUtils("Please add all fields" ,400) );

    await Course.create( 
        {title , description , createdBy ,category, 
        poster : {
            public_id : mycloud.public_id,
            url : mycloud.secure_url,
        } } );


    res.status(201).json({
        success: true,
        message : "Course created successsfully. You can add lectures now"
    });
}  );


export const getCourseLectures = catchAsyncError( async(req,res,next) => {

    const course = await Course.findById(req.params.id);

    if(!course)
      return next( new errorHandlerUtils("No course found",404));

    course.views += 1;

    await course.save();

    res.status(200).json({
        success: true,
        lecture: course.lectures
    });
}  );


export const addCourseLecture = catchAsyncError( async(req,res,next) => {

    const {id} = req.params.id;
    const {title , description } = req.body;
    // const file = req.file;

    const course = await Course.findById(id);

    if(!course)
      return next( new errorHandlerUtils("No course found",404));

    //upload file

    course.lectures.push({
        title, description , video : {
            public_id : "url",
            url : "url"
        }
    })

    course.numOfVideos = course.lectures.length;
 
    await course.save();

    res.status(200).json({
        success: true,
        message : "Lecture added from course"
    });
}  );
