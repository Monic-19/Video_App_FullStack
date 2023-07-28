import { User } from "../Models/User.js";
import { catchAsyncError } from "../Middlewares/catchAsyncError.js";
import errorHandlerUtils from "../Utils/errorHandlerUtils.js";
import { sendToken } from "../Utils/sendToken.js";
import { sendEmail } from "../Utils/SendEmail.js";
import crypto from "crypto"; 
import { Course } from "../Models/Course.js";
import cloudinary from "cloudinary";
import getDataUri from "../Utils/dataUri.js";
import {Stats} from "../Models/Stats.js";


export const register = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  const file = req.file;

  if (!name || !email || !password || !file)
    return next(new errorHandlerUtils("Please enter all fields", 400))

  let user = await User.findOne({ email });

  if (user)
    return next(new errorHandlerUtils("User already exists", 400));

  //upload file on cloudinary

  const fileUri = getDataUri(file);
  const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);


  user = await User.create(
    {
      name, email, password,
      avatar: {
        public_id: mycloud.public_id,
        url: mycloud.secure_url
      }
    }
  );

  sendToken(res, user, "Registered Successfully", 201)
});


export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;


  if (!email || !password)
    return next(new errorHandlerUtils("Please enter all fields", 400))

  let user = await User.findOne({ email }).select("+password");

  if (!user)
    return next(new errorHandlerUtils("Incoorect email or password", 401));

  const isMatch = await user.comparePassword(password);

  if (!isMatch)
    return next(new errorHandlerUtils("Incorrect email or password", 401));


  sendToken(res, user, `Welcome back ${user.name}`, 200)
});



export const logout = catchAsyncError(async (req, res, next) => {

  res.status(200).cookie("token", null, { expires: new Date(Date.now()) }).json({
    success: true,
    message: "logged out successfully"
  })
});



export const getMyProfile = catchAsyncError(async (req, res, next) => {

  const user =  await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
    message: "user data send"
  })
});


export const changePassword = catchAsyncError(async (req, res, next) => {

  const {oldPassword, newPassword} = req.body;

  if( !oldPassword || !newPassword){
    return next(new errorHandlerUtils("Plese enter all fields", 400));
  }

  const user =  await User.findById(req.user._id).select("+password");

  const isMatch = await user.comparePassword(oldPassword);

  if (!isMatch)
    return next(new errorHandlerUtils("Incorrect old password", 401));

  user.password= newPassword;

  await user.save();


  res.status(200).json({
    success: true,
    message: "Password changed Successfully"
  })

});



export const updateProfile = catchAsyncError(async (req, res, next) => {

  const {name,email} = req.body;

  const user =  await User.findById(req.user._id).select("+password");

  if(name) user.name=name;

  if(email) user.email = email;

  await user.save();


  res.status(200).json({
    success: true,
    message: "Profile updated Successfully"
  })

});


export const updateProfilePicture = catchAsyncError( async (req,res,next) => {
  
  const user =  await User.findById(req.user._id);

  const file = req.file;
  const fileUri = getDataUri(file);
  const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);
  
  await cloudinary.v2.uploader.destroy(user.avatar.public_id);

  user.avatar = {
    public_id : mycloud.public_id,
    url : mycloud.secure_url
  }

  await user.save();
  
  res.status(200).json({
    success: true,
    message: "Profile picture updated Successfully"
  })
})


export const forgetPassword = catchAsyncError( async (req,res,next) => {

  const {email} = req.body;

  const user = await User.findOne({email});

  if(!user)
     return next(new errorHandlerUtils("User doesnt exist",400))

  const resetToken = await user.getResetToken();
    //send token by mail

  const url = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;

  const message = `Click on the link to reset your password. ${url}. If you haven't requested then please ignore.` 

  await user.save();

  await sendEmail(user.email , "Forgot Password" , message);

  res.status(200).json({
    success: true,
    message: `Password has been sent to ${user.email}`
  })
})


export const resetPassword = catchAsyncError( async (req,res,next) => {

  const {token} = req.params;

  const resetPasswordToken =  crypto.createHash("sha256").update(token).digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire : {
      $gt : Date.now(),
    },
  })
  
  if(!user)
  return next( new errorHandlerUtils("Token is invalid or has been expired", 401))
        
  user.password = req.body.password;

  user.resetPasswordExpire = undefined;
  user.resetPasswordToken = undefined;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Password changed Successfully",
    
  })
})


export const addToPlaylist = catchAsyncError (async (req,res,next) => {

  const  user = await User.findById(req.user._id);
  const course = await Course.findById(req.body.id);

  if(!course)
  return next( new errorHandlerUtils("Invalid course id", 404));

  const itemExist = user.playlist.find( (item) => {
    if(item.course.toString() === course._id.toString())
      return true;
  } )

  if(itemExist)
  return next( new errorHandlerUtils("already added to playlist", 409));


  user.playlist.push({
    course : course._id,
    poster: course.poster.url,
  })
  
  await user.save();

  res.status(200).json({
    success: true,
    message: "Course added to playlist",
  })

})



export const removeFromPlaylist = catchAsyncError (async (req,res,next) => {

  const  user = await User.findById(req.user._id);
  const course = await Course.findById(req.body.id);

  if(!course)
  return next( new errorHandlerUtils("Invalid course id", 404));

  const newPlaylist = user.playlist.filter( (item) => {
    if(item.course.toString() !== course._id.toString())
      return item
  } )

  user.playlist = newPlaylist;

  
  await user.save();

  res.status(200).json({
    success: true,
    message: "Course removed from playlist",
  })
})


//Admin Routes

export const getAllUsers = async(req, res, next) => {

  const users = await User.find({});

  res.status(200).json({
    success: true,
    users,
    message: "all users "
  })
}


export const updateUserRole = async(req, res, next) => {
 
  const user = await User.findById(req.params.id);

  if(!user)
    return next(new errorHandlerUtils("user not found",404))

  if(user.role === "user")
    user.role = "admin"
  else
    user.role = "user"

  await user.save();

  res.status(200).json({
    success: true,
    message: "role changed successfully "
  })
}


export const deleteUser = async(req, res, next) => {
 
  const user = await User.findById(req.params.id);

  if(!user)
    return next(new errorHandlerUtils("user not found",404))

  await cloudinary.v2.uploader.destroy(user.avatar.public_id); 

  //cancel subscription -todo

  await user.deleteOne();

  res.status(200).json({
    success: true,
    message: "user deleted successfully"
  })
}


export const deleteMyProfile  = async(req, res, next) => {
 
  const user = await User.findById(req.user._id);

  await cloudinary.v2.uploader.destroy(user.avatar.public_id); 

  //cancel subscription -todo

  await user.deleteOne();

  res.status(200).cookie("token" ,null ,{
    expires : new Date(Date.now())
  }).json({
    success: true,
    message: "user deleted successfully"
  })
}

User.watch().on("change" ,async ()=> {
  const stats = await Stats.find({}).sort({createdAt : "desc"}).limit(1);

  const subscription = await User.find({"subscription.status" : "active"});

  stats[0].users = await User.countDocuments();
  stats[0].subscription = subscription.length;
  stats[0].createdAt = new Date(Date.now());

  await stats[0].save(); 
});