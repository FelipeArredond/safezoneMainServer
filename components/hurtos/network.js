const express = require('express');
const controller = require('./controller')
const response = require('../../network/response')

const router = express.Router();

router.get(('/'),(req, res) => {
  // return response.succes(req,res, controller.listHurtos(), 200) *****ISSUE TO SOLVE****
  return controller.listHurtos(req,res)
})

router.post(('/'),(req,res)=>{
  const data = req.body
  return response.succes(req,res, controller.addHurto(data), 201);
})

module.exports = router;
