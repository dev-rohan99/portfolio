import portfolioModel from "../../models/portfolio-model/portfolioModel.js";
import userModel from "../../models/user-model/userModel.js";
import { createError } from "../../utility/createError.js";


/**
 * admin portfolio
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

export const adminPortfolioCreate = async (req, res, next) => {

    try{

        const {userId} = req.body;
        
        const findUserRole = await userModel.findOne({_id : userId});

        if(findUserRole.role === "user"){
            return next(createError(401, "You are not eligable for this features!"));
        }

        const portfolio = await portfolioModel.create({
            ...req.body,
            userId : userId
        });

        if(portfolio){
            return res.status(200).json({
                message : "User sign up successfull!",
                portfolio : portfolio
            });
        }

    }catch(err){
        return next(err);
    }

}
  
  /**
   * get all portfolio
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  
  export const getAllAdminPortfolio = async (req, res, next) => {
    try {
  
      const fillters = {
        ...(req.query.cat && {categories : req.query.cat})
      };
      
      const product = await productModel.find(fillters);
      if(product){
        res.status(200).json({
          message: "Successfull!",
          product,
        });
      }else{
        next(createError(404, "Failed!"));
      }
      
    } catch (error) {
      next(createError(500, "Something went wrong!"));
    }
  };



