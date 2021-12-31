const mongoose = require('mongoose');
const productSchema = new mongoose.schema({
    name:{
        type: String,
        required: true
    },
    ContInStock:{
        type:Number,
        required:true
    },
    imageurl:{
            type:String,
            required:true
    },
    description:{
            type:String,
            required:true
    },
    price:{
        type:Number,
        required: true
    },
    size:{
        type: String,
        required:true
    }
});
const Product = mongoose.model('product',productSchema);
module.exports=Product;