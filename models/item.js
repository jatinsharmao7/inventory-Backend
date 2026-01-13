const mongoose = require("mongoose");

const ItemSchema= new mongoose.Schema({
    ItemName:{
        type:String,
        required: true,
        trim: true,
        unique: true
    },
    Description:{
        type:String,
        require:true
    },
    Price:{
        type:Number,
        required: true,
        min:0

    },
    Stock:{
        type:Number,
        required: true,
        min:0


    }
    
},{
    timestamps:true
});

const Item= mongoose.model("Item",ItemSchema);
module.exports=Item;