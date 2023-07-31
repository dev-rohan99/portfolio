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
        
        const findUserRole = await userModel.findOne({_id : req.userId});
        if(findUserRole.role === "user"){
            return next(createError(401, "You are not eligable for this features!"));
        }

        const portfolio = await portfolioModel.create({
            ...req.body,
            userId : req.userId
        });

        if(portfolio){
            return res.status(200).json({
                message : "Successfull!",
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
  
      // const fillters = {
      //   ...(req.query.cat && {categories : req.query.cat})
      // };
      
      const portfolios = await portfolioModel.find();
      if(portfolios){
        res.status(200).json({
          message: "Successfull!",
          portfolios,
        });
      }else{
        next(createError(404, "Failed!"));
      }
      
    } catch (error) {
      next(createError(500, "Something went wrong!"));
    }
  };



