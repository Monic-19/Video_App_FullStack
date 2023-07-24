import express from "express";
import { isAuthenticated } from "../Middlewares/auth.js";
import { buySubscription, cancelSubscription, getRazorpayKey, paymentVerification } from "../Controllers/paymentController.js";

const router = express.Router();

//Buy subscription 
router.route("/subscription/buy").get(isAuthenticated ,buySubscription)

//Payment Verification
router.route("/subscription/verify").post(isAuthenticated , paymentVerification)

// Get razorpay key
router.route("/subscription/razorpaykey").get(getRazorpayKey); 

//Cancel Subscription
router.route("/subscription/cancel").delete(isAuthenticated, cancelSubscription); 

export default router;