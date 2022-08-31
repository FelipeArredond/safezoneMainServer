const express = require('express');
const faker = require('faker')

const router = express.Router();

router.get('/:productId',(req,res)=>{
  const { productId } = req.params;
  res.json({
    name: productId
  })
})

module.exports = router
