

const validInput=(req,res,next)=>{
    try{
        const{email,password}=req.body;


    if(!email||!password){
        return res.status(400).json({
            message:"Email and password are required"
        });

    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        return res.status(400).json({
            message:"Invalid email format"
        });
    }

    if(password.length<8){
        return res.status(400).json({
            message:"password is invalid"
        });
    }
    
    next();

    }catch(error){
        next(error);
    }
    
};

module.exports=validInput;