import { catchAsyncError } from "../Middlewares/catchAsyncError.js";
import {sendEmail} from "../Utils/SendEmail.js";
import errorHandlerUtils from "../Utils/errorHandlerUtils.js";
import {Stats} from "../Models/Stats.js";

export const contact = catchAsyncError( async(req,res,next) => {

    const {name,email,message} = req.body;

    console.log("r")

    if(!name || !email || !message)
    return next(new errorHandlerUtils("Enter all the fields",404))

    console.log(name,email,message)

    const to = process.env.MY_MAIL;
    const subject = "Contact form CourseBundler";
    const text = `I am ${name} and my Email is ${email}. \n ${message}`;

    await sendEmail(to,subject,text)

    res.status(200).json({
        success : true,
        message : "Your message have been sent"
    })

} )


export const courseRequest = catchAsyncError( async(req,res,next) => {

    const {name,email,course} = req.body;

    if(!name || !email || !course)
      return next(new errorHandlerUtils("Enter all the fields",404))

    const to = process.env.MY_MAIL;
    const subject = "Request for a course on CourseBundler";
    const text = `I am ${name} and my Email is ${email}. \n ${course}`;

    await sendEmail(to,subject,text)

    res.status(200).json({
        success : true,
        message : "Your request has been send"
    })

} )


export const dashboardStatus = catchAsyncError( async(req,res,next) => {

    const stats =  await Stats.find({}).sort({createdAt : "desc"}).limit(12);

    const statsData =[];

    for( let i = 0 ; i< stats.length ; i++){
        statsData.unshift(stats[i]);
    }
    
    const requiredSize = 12 - stats.length;

    for( let i = 0 ; i< requiredSize ; i++){
        statsData.unshift({
            users : 0,
            subscription : 0,
            views : 0,
        });
    }

    const userCount = statsData[11].users;
    const subscriptionCount = statsData[11].users;
    const viewsCount = statsData[11].users;

    let userPercentage = 0,viewsPercentage = 0,subscriptionPercentage =0;
    
    let userProfit = true,viewsProfit =true, subscriptionProfit = true;

    if(statsData[10].users === 0 ) userPercentage = userCount*100;
    if(statsData[10].views === 0 ) userPercentage = viewsCount*100;
    if(statsData[10].subscription === 0 ) userPercentage = subscriptionCount*100;

    else {
        const difference = {
            users : statsData[11].users - statsData[10].users,
            views : statsData[11].views - statsData[10].views,
            subscription : statsData[11].subscription - statsData[10].subscription,
        };

        userPercentage = (difference.users / statsData[10].users) * 100;
        viewsPercentage = (difference.views / statsData[10].views) * 100;
        subscriptionPercentage = (difference.subscription / statsData[10].subscription) * 100;

        if(userPercentage < 0) userProfit = false;
        if(viewsPercentage < 0) viewsProfit = false;
        if(subscriptionPercentage < 0) subscriptionProfit = false;

    }
    

    res.status(200).json({
        success : true,
        stats : statsData,
        subscriptionCount,
        subscriptionCount,
        viewsCount,
        subscriptionPercentage,
        viewsPercentage,
        userPercentage,
        subscriptionProfit,
        viewsProfit,
        userProfit
    })

} )