const Item = require("../models/item");

const itemdata=async(req,res,next)=>{
    try{
        const itemname=req.query.ItemName;
        const itemnamefromdb= await Item.FindOne({ItemName:itemname});
        if(!itemnamefromdb){
            return res.status(401).json({
                messages:"Item name already exist please chanfe this name"
            });
        }
        next();


    }catch(next){
        error(next);
        

    }
}
module.exports=itemdata;