const express = require('express');
const controller = require('./controller')
const response = require('../../network/response')

const router = express.Router();

router.post(('/'),(req,res)=>{
  const reporte = req.body;
  return response.succes(req,res,controller.addReporte(reporte),201)
})

router.get(('/'),(req,res)=>{
  return controller.getReportes(req,res)
})

module.exports = router;
