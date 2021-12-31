const res = require('express/lib/response');
const Products = require('../data/Products');
const Product =require ('../models/Product');
const getAllProducts = async (req,res) => {
    try {
        const products = await Product.find({});
        res.json(Products);

    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Server Error"});
        
    }
}
const getProductById = async (req,res) => {
    try {
        const products = await Product.findById(req.params.id);
        res.json(Product);

    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Server Error"});
        
    }
    
};
module.exports={
    getProductById,
    getAllProducts,
};