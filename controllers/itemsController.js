const Item = require("../models/item");

const addItems = async (req, res, next) => {
    try {
        const Itemdata = req.body;
        const existItem = await Item.findOne({ ItemName: Itemdata.ItemName });
        if (existItem) {
            res.status(400).json({
                message: "Item already exist"
            });
        }

        const item = await Item.create(Itemdata);
        return res.status(200).json({
            success: true,
            message: "Item added succesfully",
            item: {
                ItemId: item._id,
                ItemName: item.ItemName
            }
        });
    } catch (error) {
        next(error);
    }


}
const updateitem = async (req, res, next) => {
    try {
        const { id } = req.params;

        const updateditem = await Item.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );
        if (!updateditem) {
            return res.status(404).json
                ({
                    message: "item did not find"
                });
        }
        return res.status(200).json({
            success: true,
            data: updateditem
        })


    } catch (error) {
        next(error);
    }
}

const allitem = async (req, res, next) => {
    try {
        const items = await Item.find();

        return res.status(200).json({
            success: true,
            count: items.length,
            data: items
        })

    } catch (error) {
        next(error);
    }

}

const itembyId= async(req,res,next)=>{
    try{
        const {id}=req.params;

    const item = await Item.findById(id);
    if(!item){
        return res.status(404).json({
            success:false,
            message:"Item not found"
        });
    }

    return res.status(200).json({
        success:true,
        data: item
    });

    }catch(error){
        next(error);
    }
    
}
module.exports = { addItems, updateitem, allitem , itembyId};