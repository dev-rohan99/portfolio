import packageModel from "../../models/package-model/packageModel.js";
import portfolioModel from "../../models/portfolio-model/portfolioModel.js";
import promoCodeModel from "../../models/promo-code-model/promoCodeModel.js";
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


/**
 * admin packages
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

export const packageCreate = async (req, res, next) => {

  try{

      const { discountPersent, price } = req.body;
      
      const findUserRole = await userModel.findOne({_id : req.userId});
      if(findUserRole.role === "user"){
          return next(createError(401, "You are not eligable for this features!"));
      }

      let discountPriceCal;
      if(discountPersent !== ""){
        discountPriceCal = ((price * (100 - discountPersent)) / 100).toFixed(2); 
      }

      const packages = await packageModel.create({
          ...req.body,
          userId : req.userId,
          discountPrice : discountPriceCal
      });

      if(packages){
          return res.status(200).json({
              message : "Successfull!",
              packages : packages
          });
      }

  }catch(err){
      return next(err);
  }

}

/**
 * admin packages
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

export const packagesGet = async (req, res, next) => {

  try{

      const fillters = {
        ...(req.query.cat && {categories : req.query.cat}),
        ...(req.query.service && {serviceName : req.query.service}),
        ...(req.query.type && {packageType : req.query.type}),
        ...((req.query.minPrice || req.query.maxPrice || req.query.minPrice2 || req.query.maxPrice2 || req.query.minPrice3 || req.query.maxPrice3 || req.query.minPrice4 || req.query.maxPrice4 || req.query.minPrice5 || req.query.maxPrice5 || req.query.minPrice6 || req.query.maxPrice6) ? {
          $or: [
            ...(req.query.minPrice && req.query.maxPrice
              ? [
                  {
                    price: {
                      $gt: req.query.minPrice,
                      $lt: req.query.maxPrice,
                    },
                  },
                ]
              : []),
            ...(req.query.minPrice2 && req.query.maxPrice2
              ? [
                  {
                    price: {
                      $gt: req.query.minPrice2,
                      $lt: req.query.maxPrice2,
                    },
                  },
                ]
              : []),
            ...(req.query.minPrice3 && req.query.maxPrice3
              ? [
                  {
                    price: {
                      $gt: req.query.minPrice3,
                      $lt: req.query.maxPrice3,
                    },
                  },
                ]
              : []),
            ...(req.query.minPrice4 && req.query.maxPrice4
              ? [
                  {
                    price: {
                      $gt: req.query.minPrice4,
                      $lt: req.query.maxPrice4,
                    },
                  },
                ]
              : []),
            ...(req.query.minPrice5 && req.query.maxPrice5
              ? [
                  {
                    price: {
                      $gt: req.query.minPrice5,
                      $lt: req.query.maxPrice5,
                    },
                  },
                ]
              : []),
            ...(req.query.minPrice6 && req.query.maxPrice6
              ? [
                  {
                    price: {
                      $gt: req.query.minPrice6,
                      $lt: req.query.maxPrice6,
                    },
                  },
                ]
              : []),
          ]
        } : {})
      };
      console.log(fillters);
      const packages = await packageModel.find(fillters);
      if(!packages) return next(createError(404, "Packages not found!"));

      if(packages){
        res.status(200).json({
          message: "Successfull!",
          packages,
        });
      }else{
        next(createError(404, "Failed!"));
      }

  }catch(err){
      return next(err);
  }

}

/**
 * admin promo code create
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

export const promoCodeCreate = async (req, res, next) => {

  try{

      const { promoCode, packageId } = req.body;
      
      const findUserRole = await userModel.findOne({_id : req.userId});
      if(findUserRole.role === "user"){
          return next(createError(401, "You are not eligable for this features!"));
      }

      const now = new Date();
      // Add 12 hours to the current date and time
      const futureDate = new Date(now);
      futureDate.setHours(now.getHours() + 12);

      const promo = await promoCodeModel.create({
          ...req.body,
          userId : req.userId,
          expiresIn : futureDate
      });

      if(promo){
          return res.status(200).json({
              message : "Successfull!",
              promo : promo
          });
      }

  }catch(err){
      return next(err);
  }

}



