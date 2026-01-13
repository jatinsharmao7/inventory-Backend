const User= require("../models/user");
const jwt = require("jsonwebtoken");


const createUser= async(req,res,next)=>{
    try{
        const userData = req.body;
        
        const existingUser = await User.findOne({email:userData.email});
        if(existingUser){
            return res.status(409).json({
                message:"user already exists"
            });
        }
        const user = await User.create(userData);
        const token = jwt.sign(
            {userId: user._id},
            process.env.JWT_secret,
            {expiresIn:"1d"}

        ); 
            res.status(201).json({
                success: true,
                message:"user created successfully",
                user:{
                    id:user._id,
                    email:user.email,
                    
                },
                token:token
            });
            
        
    }
    catch(error){
        next(error);
    }
}
module.exports={createUser};