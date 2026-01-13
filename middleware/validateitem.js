const validateitem = (req,res,next)=>{
    try{
        const{ItemName,Description,Price,Stock}=req.body;
    if(!ItemName){
        res.status(400).json({
            message:"Item Name is missing"
        });
    }
    if(!Description){
        res.status(400).json({
            message:"Item description is missing"
        });
    }
    if(!Price){
        res.status(400).json({
            message:"Item price is missing"
        });

    }
    if(!Stock){
        res.status(400).json({
            message:"Item Stock is missing"
        });
    }
   


    next();

    }
    catch(error){
        next(error);
    }
    
}

module.exports= validateitem;