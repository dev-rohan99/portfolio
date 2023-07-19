import userModel from "../../models/user-model/userModel.js";
import { checkPassword } from "../../utility/checkPassword.js";
import { createError } from "../../utility/createError.js";
import { hashPasswordGenarate } from "../../utility/hashPassword.js";
import { createToken } from "../../utility/token.js";
import { isEmail, isUsername } from "../../utility/validation.js";


/**
 * user sign up controller
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

export const userSignup = async (req, res, next) => {

    try{

        const {email, username, password} = req.body;
        
        const findEmail = await userModel.findOne({email : email});

        if(findEmail){
            return next(createError(404, "E-mail address already exist!"));
        }
        
        const findUsername = await userModel.findOne({username : username});

        if(findUsername){
            return next(createError(404, "Username already exist!"));
        }

        const user = await userModel.create({
            ...req.body,
            password : hashPasswordGenarate(password)
        });

        // if(!user){
        //     return next(createError(404, "User not created!"));
        // }

        if(user){
            return res.status(200).json({
                message : "User sign up successfull!",
                user : user
            });
        }

    }catch(err){
        return next(err);
    }

}

/**
 * user login controller
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

export const userLogin = async (req, res, next) => {

    try{

        const {emailOrUsername, password} = req.body;

        if(isEmail(emailOrUsername)){
            
            const emailUser = await userModel.findOne({email : emailOrUsername});

            if(!emailUser){
                return next(createError(404, "You have not signed up yet!"));
            }else{
                if(!checkPassword(password, emailUser.password)){
                    return next(createError(404, "Password not match!"));
                }else{
                    const token = createToken({id : emailUser._id}, "183d");

                    return res.status(200).cookie("token", token).json({
                        message : "Welcome back!",
                        user : emailUser
                    });
                }
            }

        }else if(isUsername(emailOrUsername)){

            const usernameUser = await userModel.findOne({username : emailOrUsername});

            if(!usernameUser){
                return next(createError(404, "You have not signed up yet!"));
            }else{
                if(!checkPassword(password, usernameUser.password)){
                    return next(createError(404, "Password not match!"));
                }else{
                    const token = createToken({id : usernameUser._id}, "183d");

                    return res.status(200).cookie("token", token).json({
                        message : "Welcome back!",
                        user : usernameUser
                    });
                }
            }

        }else{
            return next(createError(404, "Invalid username or email address!"));
        }

    }catch(err){
        return next(err);
    }

}




