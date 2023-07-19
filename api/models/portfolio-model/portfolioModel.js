import mongoose from "mongoose";


const portfolioDataSchemaModel = mongoose.Schema({

    userId : {
        type : String,
        required : true
    },

    projectName : {
        type : String,
        trim : true,
        required : true
    },

    projectUrl : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },

    projectGithubUrl : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },

    projectDesc : {
        type : String,
        required : true,
        trim : true
    },

    status : {
        type : String,
        enum : ["completed", "ongoing"],
        default : "completed"
    },

    categories : {
        type : Array,
        default : []
    },

    technologies : {
        type : Array,
        default : []
    }

}, {
    timestamps : true
});

const portfolioModel = mongoose.model("portfolio", portfolioDataSchemaModel);

export default portfolioModel;
