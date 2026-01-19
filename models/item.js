const mongoose = require("mongoose");

const ItemSchema= new mongoose.Schema({
    createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
    ItemName:{
        type:String,
        required: true,
        trim: true,
        
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