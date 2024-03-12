const products = require('../models/productSchema')




//get all products

exports.getAllProductControllers = async (req, res) => {
    try {

        const allproducts = await products.find()
        res.status(200).json(allproducts)
        
    } catch (error) {
        res.status(402).json(error)
        
    }
}

//get a single product

exports.getProduct = async (req, res) => {

    const {id}=req.params
    
    try {

        const product = await products.findOne({ id })
        res.status(200).json(product)
        
    } catch (error) {
        res.status(401).json(error)
        
    }
    
}