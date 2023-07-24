import express from "express";
import { authorizeAdmin, isAuthenticated } from "../Middlewares/auth.js";
import { contact, courseRequest, dashboardStatus,  } from "../Controllers/otherController.js";

const router = express.Router();

//contact form
router.route("/user/contact").post(contact);
 
//request form
router.route("/request").post(courseRequest);

//get admin dashboard status
router.route("/admin/stats").get(isAuthenticated, authorizeAdmin, dashboardStatus);



export default router; 