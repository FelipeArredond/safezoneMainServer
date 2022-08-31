const express = require('express');
const ProductsServices = require('./../services/products.services')

const router = express.Router();
const productService = new ProductsServices();

router.get('/',(req,res)=>{
  const products = productService.find();
  res.json(products)
})

router.get('/:id',(req,res)=>{
  const { id } = req.params;
  res.json({
    id:id   ,
    name: 'Producto',
    price: 1000
  })
})

router.post('/',(req,res)=>{
  const body = req.body;
  res.json({
    message: 'created',
    datat: body
  })
})

module.exports = router;
