const jwt= require("jsonwebtoken");
const protect= (req,res,next)=>{
    try{
        const token=req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.status(401).json({
            message:"No token provided"});
    } 
    const decoded = jwt.verify(token,process.env.JWT_secret);
    req.userId= decoded.userId;
    next();

    }catch(error){
        next(error);
    }
    

};

module.exports=protect;