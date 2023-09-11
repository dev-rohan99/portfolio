import mongoose from "mongoose";

const promoCodeSchemaModel = mongoose.Schema({

    packageId : {
        type : String,
        trim : true,
        required : true
    },

    userId : {
        type : String,
        required : true
    },

    packageTitle : {
        type : String,
        required : true
    },

    packageType : {
        type : String,
        required : true
    },

    price : {
        type : String,
        required : true
    },

    isComplete : {
        type : Boolean,
        default : false
    },

    paymentIntent : {
        type : String,
        required : true
    }

}, {
    timestamps : true
});

const promoCodeModel = mongoose.model("orders", promoCodeSchemaModel);

export default promoCodeModel;
