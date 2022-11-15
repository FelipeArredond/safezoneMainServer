const express = require('express');
const controller = require('./controller')
const response = require('../../network/response')

const router = express.Router();

router.post(('/'),(req,res)=>{
  const user = req.body;
  return response.succes(req,res,controller.register(user),201)
})

router.get(('/'),(req,res)=>{
  return controller.getUsers(req,res)
})

router.post(('/log'),(req,res)=>{
  const userData = req.body
  return controller.Log(req,res,userData)
})

router.post(('/reports'),(req,res)=>{
  const userData = req.body;
  return controller.reports(req,res,userData)
})

module.exports = router;
