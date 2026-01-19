
const Item = require("../models/item");

const ownershipcheck= async(req,res,next)=>{
    try{
        const item = await Item.findById(req.params.id);
        // console.log("sahskhaskh",item);
        
        if (!item) {
      return res.status(404).json({
        message: "Item not found"
      });
    }
    if (!item.createdBy) {
      return res.status(400).json({ message: "Item has no owner" });
    }

    // 3️⃣ Auth check
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

      if(item.createdBy.toString()!==req.user.id){
            return res.status(403).json({
                message: "you did not own this data"
            });

        }
        next();
    }
    
        


    catch(error){
        next(error);
    }
}
module.exports=ownershipcheck;