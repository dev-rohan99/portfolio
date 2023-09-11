import mongoose from "mongoose";

const promoCodeSchemaModel = mongoose.Schema({

    promoCode : {
        type : String,
        trim : true,
        required : true
    },

    packageId : {
        type : String,
        trim : true,
        required : true
    },

    userId : {
        type : String,
        required : true
    },

    expiresIn : {
        type : Date,
        required : true
    }

}, {
    timestamps : true
});

const promoCodeModel = mongoose.model("promo-codes", promoCodeSchemaModel);

export default promoCodeModel;
