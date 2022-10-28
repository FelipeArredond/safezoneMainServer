const express = require('express');
const controller = require('./controller')
const response = require('../../network/response')

const router = express.Router();

router.get(('/'),(req, res) => {
  return controller.listTexts(req,res)
})

module.exports = router;
