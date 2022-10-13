const express = require('express');
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router();

router.get(('/'),(req, res) => {
  return response.succes(req, res, controller.getBarrios(), 200)
})

router.get(('/nombres'),(req,res) => {
  return response.succes(req, res, controller.getBarriosNames(), 200)
})

router.get(('/comunas'),(req,res)=>{
  return response.succes(req, res, controller.getBarriosComunas(), 200)
})

module.exports = router;
