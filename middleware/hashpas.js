const bcrypt=require('bcrypt');

const hashpas=async(req,res,next)=>{
    try{
        const{password}=req.body;
        if(!password){
            return next();
        }
        const saltround=5;

        const hashpas=await bcrypt.hash(password,saltround);
        req.body.password=hashpas;
        next();
    }catch(error){
        next(error);
    }
};

module.exports=hashpas;