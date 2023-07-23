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

    const {id} = req.params ;
    const {title , description } = req.body;

 
    const course = await Course.findById(id);
    

    if(!course)
      return next( new errorHandlerUtils("No course found",404));

    //upload file


    const file = req.file;

    const fileUri = getDataUri(file);
  
    const mycloud = await cloudinary.v2.uploader.upload(fileUri.content, {
        resource_type : "video",
    });



    course.lectures.push({
        title, description , video : {
            public_id : mycloud.public_id,
            url : mycloud.secure_url, 
        }
    })

    course.numOfVideos = course.lectures.length;
 
    await course.save();

    res.status(200).json({
        success: true,
        message : "Lecture added from course"
    });
}  );


export const deleteCourse = catchAsyncError( async(req,res,next) => {
    
    const {id} = req.params; 

    const course = await Course.findById(id);

    if(!course)
      return next( new errorHandlerUtils("No course found",404));

    await cloudinary.v2.uploader.destroy(course.poster.public_id);
    
    for (let i = 0; i < course.lectures.length ; i++) {
        const lecture= course.lectures[i];
        await cloudinary.v2.uploader.destroy(lecture.video.public_id);
    }


    await course.deleteOne();


    res.status(201).json({
        success: true,
        message : "Course deleted successsfully."
    });
}  );


export const deleteLecture = catchAsyncError( async(req,res,next) => {

    const {courseId, lectureId} = req.body;

    // console.log(courseId, " : ", lectureId)

    const course = await Course.findById(courseId);


    let lecture =  course.lectures.filter( (item) => {
        if(item._id.toString() === lectureId.toString())
          return item;
    } )

    // await cloudinary.v2.uploader.destroy(lecture.video.public_id ,{ resource_type : "video" });

    course.lectures = course.lectures.filter( (item) => {

        if(item._id.toString() !== lectureId.toString())
          return item;
    } )

    await course.save();

    res.status(201).json({
        success: true,
        message : "Lecture deleted successsfully."
    });
     
})
 