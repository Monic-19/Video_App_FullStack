import  express  from "express";
import { config } from "dotenv";
import errorMiddleware from "./Middlewares/errorHandler.js ";
import cookieParser from "cookie-parser";

config({
    path: "./config/config.env",
});

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());

import course from "./Routes/courseRoutes.js";
app.use("/api/v1",course);

import user from "./Routes/userRoutes.js";
app.use("/api/v1",user);

import payment from "./Routes/paymentRoutes.js";
app.use("/api/v1/",payment)

import other from "./Routes/otherRoutes.js";
app.use("/api/v1",other)

export default app;

app.use(errorMiddleware);