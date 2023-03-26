import mongoose from "mongoose";

const mongoDBConnect = async () => {

    try{

        const mongoDBConnectStr = process.env.MONGO_STRING;
        const connection = await mongoose.connect(mongoDBConnectStr);
        
        if(connection){
            console.log("MongoDB Connected!".bgGreen.white);
        }  

    }catch(err){
        console.log(err);
    } 

}

export default mongoDBConnect;
