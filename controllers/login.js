const User= require("../models/user");
const bcrypt = require("bcrypt");

const Login = async(req,res,next)=>{
    try{
        const{email,password}=req.body;
        

        const user = await User.findOne({email});
        
        if(!user){
           return res.status(401).json({
            message:"User did not exist"
           });
        }
        


        const match= await bcrypt.compare(password,user.password);
        
        if(!match){
            return res.status(401).json({
                message:"password is incorrect"
            });

        }

        res.status(200).json({
            success:true,
            message:"Login successful",
            user:{
                id:user._id,
                email:user.email

            }

        });


    }catch(error){
        next(error);
    }
}

module.exports={Login};