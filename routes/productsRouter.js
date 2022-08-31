const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/',(req,res)=>{
  const {size} = req.query;
  const limit = size || 10;
  const products =  [];
  for(let i = 0; i < parseInt(limit); i++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl()
    })
  }
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
