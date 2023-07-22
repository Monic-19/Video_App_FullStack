import express from "express"
import { getAllUsers ,register  ,login ,logout ,getMyProfile} from "../Controllers/userController.js";
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
//  UpdateProfile
// Update ProfilePicture

// forget password
//reset password

//add to playlist
//remove from playlist




export default router; 