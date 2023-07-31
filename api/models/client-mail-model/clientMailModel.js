import mongoose from "mongoose";

const clientMailDataSchemaModel = mongoose.Schema({

    name : {
        type : String,
        trim : true,
        required : true
    },

    email : {
        type : String,
        required : true,
        trim : true
    },

    message : {
        type : String,
        required : true,
        trim : true
    }

}, {
    timestamps : true
});

const clientMailModel = mongoose.model("client-mails", clientMailDataSchemaModel);

export default clientMailModel;
