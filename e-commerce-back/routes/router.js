const express = require('express')

const productController = require('../controllers/productControler')
const userController=require('../controllers/userController')


const router = new express.Router()


router.get('/products/all', productController.getAllProductControllers)
router.get('/product/view/:id',productController.getProduct)


//register

router.post('/user/register', userController.Register)

//login

router.post('/user/login',userController.Login)




module.exports = router

