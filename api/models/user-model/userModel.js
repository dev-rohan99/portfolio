import mongoose from "mongoose";


const userDataSchemaModel = mongoose.Schema({

    fullName : {
        type : String,
        trim : true,
        required : true
    },

    email : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },

    username : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },

    password : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },

    avatar : {
        type : String
    },

    gender : {
        type : String,
        enum : ["Male", "Female", "None"],
        default : "None"
    },

    role : {
        type : String,
        enum : ["user", "admin"],
        default : "user"
    }

}, {
    timestamps : true
});

const userModel = mongoose.model("users", userDataSchemaModel);

export default userModel;
