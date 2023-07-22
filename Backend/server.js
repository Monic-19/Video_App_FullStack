import app from "./app.js";
import {config} from "dotenv";

config( {
    path : "./Config/config.env"
} )

app.listen(process.env.PORT , () => {
    console.log(`server started at ${process.env.PORT}`)
})