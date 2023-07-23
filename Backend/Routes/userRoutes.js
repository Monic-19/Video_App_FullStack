import express from "express"
import { getAllUsers ,register  ,login ,logout ,getMyProfile , changePassword, updateProfile, updateProfilePicture, forgetPassword, resetPassword, addToPlaylist, removeFromPlaylist} from "../Controllers/userController.js";
import { isAuthenticated } from "../Middlewares/auth.js";

const router = express.Router();
router.route("/users").get(getAllUsers);

// To register a new user
router.route("/register").post(register);

//Login
router.route("/login").post(login);

//Logout
router.route("/logout").get(logout);

//Get my profile
router.route("/me").get(isAuthenticated ,getMyProfile);

// ChangePassword
router.route("/changepassword").put(isAuthenticated ,changePassword);

//  UpdateProfile
router.route("/updateprofile").put(isAuthenticated ,updateProfile);

// Update ProfilePicture  
//cloudinary add karni hai
router.route("/updateprofilepicture").put(isAuthenticated ,updateProfilePicture);

// forget password
router.route("/forgetpassword").post(forgetPassword);

//reset password
router.route("/resetpassword/:token").put(resetPassword);

//add to playlist
router.route("/addtoplaylist").post(isAuthenticated,addToPlaylist);

//remove from playlist
router.route("/removefromplaylist").delete(isAuthenticated,removeFromPlaylist);




export default router; 