import express from "express";
import { getAllCourses , createCourse, getCourseLectures, addCourseLecture, deleteCourse, deleteLecture} from "../Controllers/courseController.js";
import signleUpload from "../Middlewares/multer.js";
import { authorizeAdmin, authorizeSubscribers, isAuthenticated } from "../Middlewares/auth.js";

const router = express.Router();

// Get all courses without lectures
router.route("/courses").get(getAllCourses);

//Createe a new course -only admin
router.route("/createcourse").post(isAuthenticated,authorizeAdmin,signleUpload,createCourse);

//get course details
router.route("/course/:id").get(isAuthenticated, authorizeSubscribers ,getCourseLectures);

//Add lecture
router.route("/course/:id").post(isAuthenticated ,authorizeAdmin ,signleUpload ,addCourseLecture);

// Delete course
router.route("/course/:id").delete(isAuthenticated ,authorizeAdmin ,deleteCourse);

//Delete lecture
router.route("/lecture").delete(isAuthenticated , deleteLecture);

export default router; 