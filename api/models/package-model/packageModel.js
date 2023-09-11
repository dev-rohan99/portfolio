import mongoose from "mongoose";

const packageDataSchemaModel = mongoose.Schema({

    packageType : {
        type : String,
        trim : true,
        required : true
    },

    serviceName : {
        type : String,
        trim : true,
        required : true
    },

    userId : {
        type : String,
        required : true
    },

    title : {
        type : String,
        trim : true,
        required : true
    },

    features : {
        type : Array,
        required : true,
        trim : true,
        default : []
    },

    discountPrice : {
        type : String,
        required : true,
        trim : true
    },

    discountPersent : {
        type : String,
        required : true,
        trim : true
    },

    price : {
        type : String,
        required : true,
        trim : true
    },

    status : {
        type : String,
        enum : ["on", "off"],
        default : "on"
    },

    technologies : {
        type : Array,
        required : true,
        default : []
    },

    categories : {
        type : Array,
        required : true,
        default : []
    }

}, {
    timestamps : true
});

const packageModel = mongoose.model("packages", packageDataSchemaModel);

export default packageModel;
