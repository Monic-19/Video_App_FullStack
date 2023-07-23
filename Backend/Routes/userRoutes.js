import express from "express"
import { getAllUsers ,register  ,login ,logout ,getMyProfile , changePassword, updateProfile, updateProfilePicture, forgetPassword, resetPassword, addToPlaylist, removeFromPlaylist, updateUserRole, deleteUser, deleteMyProfile} from "../Controllers/userController.js";
import { authorizeAdmin, isAuthenticated } from "../Middlewares/auth.js";
import signleUpload from "../Middlewares/multer.js";

const router = express.Router();

// To register a new user
router.route("/register").post(signleUpload,register);

//Login
router.route("/login").post(login);

//Logout
router.route("/logout").get(logout);

//Get my profile
router.route("/me").get(isAuthenticated ,getMyProfile);

// Delete my profile
router.route("/me").delete(isAuthenticated ,deleteMyProfile);

// ChangePassword
router.route("/changepassword").put(isAuthenticated ,changePassword);

//  UpdateProfile
router.route("/updateprofile").put(isAuthenticated ,updateProfile);

// Update ProfilePicture  
router.route("/updateprofilepicture").put(isAuthenticated,signleUpload ,updateProfilePicture);

// forget password
router.route("/forgetpassword").post(forgetPassword);

//reset password
router.route("/resetpassword/:token").put(resetPassword);

//add to playlist
router.route("/addtoplaylist").post(isAuthenticated,addToPlaylist);

//remove from playlist
router.route("/removefromplaylist").delete(isAuthenticated,removeFromPlaylist);


// Admin routes

  //get all users
  router.route("/admin/users").get(isAuthenticated,authorizeAdmin,getAllUsers);
  
  //change role 
  router.route("/admin/user/:id").put(isAuthenticated,authorizeAdmin,updateUserRole);
  
  //delete user
  router.route("/admin/user/:id").delete(isAuthenticated,authorizeAdmin,deleteUser);

export default router; 