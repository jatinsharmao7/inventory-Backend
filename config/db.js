const mongoose = require("mongoose");

const connectDb= async()=>{
    try{
        await mongoose.connect(process.env.Mongo_Uri);
        console.log("MongoDb connected");
    }catch(error){
        console.error("mpngodb connection faild");
        process.exit(1);
    }
};

module.exports = connectDb;