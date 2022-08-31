const express = require('express');
const faker = require('faker')

const router = express.Router()

router.get('/',(req,res)=>{
  const { limit, offset } = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    });
  }else{
    res.send('No hay queries')
  }
})

module.exports = router;
