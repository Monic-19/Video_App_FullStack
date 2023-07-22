import express from "express"
import { getAllUsers ,register  ,login ,logout ,getMyProfile , changePassword, updateProfile, updateProfilePicture} from "../Controllers/userController.js";
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
//reset password

//add to playlist
//remove from playlist




export default router; 