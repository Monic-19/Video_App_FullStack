import app from "./app.js";
import {config} from "dotenv";
import { connectDB } from "./Config/database.js";

config( {
    path : "./Config/config.env"
} )

connectDB();

app.listen(process.env.PORT , () => {
    console.log(`server started at ${process.env.PORT}`)
})