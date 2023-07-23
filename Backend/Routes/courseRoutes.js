import express from "express";
import { getAllCourses , createCourse, getCourseLectures, addCourseLecture} from "../Controllers/courseController.js";
import signleUpload from "../Middlewares/multer.js";

const router = express.Router();

// Get all courses without lectures
router.route("/courses").get(getAllCourses);

//Createe a new course -only admin
router.route("/createcourse").post(signleUpload,createCourse);

//Add lecture , delete course , get course details
router.route("/course/:id").get(getCourseLectures);

router.route("/course/:id").get(getCourseLectures).post(signleUpload ,addCourseLecture);
// Delete lecture

export default router; 