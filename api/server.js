import express from "express";
import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import cookieParser from "cookie-parser";
import mongoDBConnect from "./database/database.js";
import userRoutes from "./routes/userRoutes.js"
import { errorHandler } from "./middlewares/common/errorHandler.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(cors({
    origin : "http://localhost:3000",
    credentials : true
}));

// routes
app.use("/api/v1/user", userRoutes);

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
