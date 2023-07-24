import { catchAsyncError } from "../Middlewares/catchAsyncError.js";
import { User } from "../Models/User.js";
import errorHandlerUtils from "../Utils/errorHandlerUtils.js";
import {instance} from "../server.js";
import crypto from "crypto";
import {Payment} from "../Models/Payment.js";


export const buySubscription = catchAsyncError( async (req,res,next) => {

    const user = await User.findById(req.user._id);

    if(user.role === "admin")
      return next(new errorHandlerUtils('Admis cant buy subscription' ,404))

    const plan_id = process.env.PLAN_ID || "plan_MHNKrce4QJezmX";

    const subscription = await instance.subscriptions.create({
        plan_id,
        total_count: 1,
        customer_notify: 1,
       
        notify_info: {  
          notify_phone: 9982525733,
          notify_email: "monicvyas20@gmail.com"
        }
    })

    user.subscription.id = subscription.id;

    user.subscription.status = subscription.status;

    await user.save();

    res.status(201).json({
        success : true,
        subscriptionId : subscription.id, 
    })
} )



export const paymentVerification = catchAsyncError( async (req,res,next) => {

    const {razorpay_payment_id, razorpay_order_id, razorpay_signature} = req.body;
    
    const user = await User.findById(req.user._id);

    const subscriptionId = user.subscription.id;

    const generatedSignature =  crypto.createHmac("sha256", process.env.RAZ_API_SECRET)
                                .update(razorpay_payment_id + "|" + subscriptionId ,"utf-8")
                                .digest("hex");

    const isAuthentic = generatedSignature === razorpay_signature;

    if(!isAuthentic)
      return res.redirect(`${process.env.FRONTEND_URL}/payment/fail`);

    await Payment.create(
        {razorpay_payment_id, razorpay_order_id, razorpay_signature} 
    )

    user.subscription.status = "active";
                                
    await user.save();

    res.redirect(`${process.env.FRONTEND_URL}/payment/success?reference=${razorpay_payment_id}`);
} )

export const getRazorpayKey = catchAsyncError( (req,res,next) => {
    res.status(200).json({
        success : true,
        key : process.env.RAZ_API_KEY
    })
} )


export const cancelSubscription = catchAsyncError( async(req,res,next) => {

    const user = await User.findById(req.user._id);

    const subscriptionId = user.subscription.id;

    let refund = false;

    await instance.subscriptions.cancel(subscriptionId);

    const payment =  await Payment.findOne({
        razorpay_order_id : subscriptionId,
    })

    // const gap = Date.now() - payment.createdAt;

    // const refundTime = process.env.REFUND_DAYS*24*60*60*1000;

    // if(refundTime > gap){
    //     await instance.payments.refund(payment.razorpay_order_id);
    //     refund = true;
    // }

    // await payment.deleteOne();

    user.subscription.id = undefined;

    user.subscription.status = undefined;

    user.save();
    
    res.status(200).json({
        success : true,
        message : 
        refund ? "Subscription cancelled , you will recieve full refund within 7 days" : "Subscription Cancelled, Since it is out of perioud you want get any payment"
    })
} )