import express from "express";
import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import cookieParser from "cookie-parser";
import mongoDBConnect from "./database/database.js";
import userRoutes from "./routes/userRoutes.js"
import { errorHandler } from "./middlewares/common/errorHandler.js";

const app = express();
dotenv.config();
const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(cors({
    origin : "https://rohanmostofa.vercel.app",
    credentials : true
}));

// static folder
app.use("/", express.static(__dirname + '/api/public/images'));

// routes
app.use("/api/v1/user", userRoutes);

/**
 * download resume
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

app.use("/api/v1/user/download-my-resume", (req, res, next) => {
    try{

        const filePath = "/api/public/images/myresume.pdf";
        res.download(__dirname + filePath);

    }catch(err){
        return next(err);
    }
})

// error handler
app.use(errorHandler);

const PORT = process.env.SERVER_PORT | 8080;
app.listen(PORT, (err) => {
    if(err){
        console.log(`Server running failed!`.bgRed.white);
    }else{
        mongoDBConnect();
        console.log(`Server running on ${PORT} PORT!`.bgGreen.white);
    }
});
