import { User } from "../Models/User.js";
import { catchAsyncError } from "../Middlewares/catchAsyncError.js";
import errorHandlerUtils from "../Utils/errorHandlerUtils.js";
import { sendToken } from "../Utils/sendToken.js";

export const getAllUsers = (req, res, next) => {
  res.send("working too");
}


export const register = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  //  const file = req.file;

  if (!name || !email || !password)
    return next(new errorHandlerUtils("Please enter all fields", 400))

  let user = await User.findOne({ email });

  if (user)
    return next(new errorHandlerUtils("User already exists", 400));

  //upload file on cloudinary

  user = await User.create(
    {
      name, email, password,
      avatar: {
        public_id: "tempid",
        url: "tempurl"
      }
    }
  );

  sendToken(res, user, "Registered Successfully", 201)
});


export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  //  const file = req.file;

  if (!email || !password)
    return next(new errorHandlerUtils("Please enter all fields", 400))

  let user = await User.findOne({ email }).select("+password");

  if (!user)
    return next(new errorHandlerUtils("Incoorect email or password", 401));

  //upload file on cloudinary

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