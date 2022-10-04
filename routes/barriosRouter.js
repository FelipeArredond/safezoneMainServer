const express = require('express');
const Barrios = require('./../services/barrios.services');

const router = express.Router();

const barriosNew = new Barrios();

router.get(('/barriosNew'),(req, res) => {
  return res.json(barriosNew.returnBarrios())
})

router.get(('/barriosNames'),(req,res) => {
  return res.json(barriosNew.returnBarriosNames())
})

router.get(('/barriosComunas'),(req,res)=>{
  return res.json(barriosNew.returnBarriosComunas())
})

router.get('/test',(req,res)=>{
  let {name} = req.query
  res.send(name);
})


module.exports = router;
