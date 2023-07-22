import express from "express";
import { getAllCourses , createCourse} from "../Controllers/courseController.js";

const router = express.Router();

// Get all courses without lectures
router.route("/courses").get(getAllCourses);

//Createe a new course -only admin
router.route("/createcourse").post(createCourse);

//Add lecture , delete course , get course details

// Delete lecture

export default router; 