import { createError } from "../../utility/createError.js";
import jwt from "jsonwebtoken";


export const verifyUser = (req, res, next) => {
    try{
        const token = req.cookies.token;
        if(!token) return next(createError(401, 'You are not authenticated!'));

        jwt.verify(token, process.env.JWT_SECRECT, async (err, payload) => {
            if(err) return next(createError(403, 'Token is not valid!'));
            req.userId = payload.id;
            next();
        });
        console.log(req.userId);
    }catch(err){
        return next(err);
    }
}



