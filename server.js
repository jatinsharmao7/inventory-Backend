const app=require("./app");

const connectDb = require('./config/db');
require("dotenv").config();
const PORT=process.env.PORT||3000;




app.listen(PORT,()=>{
    
    console.log(`server running on port: ${PORT}`);
    connectDb();
});