const express = require('express');
const Hurtos = require('../services/hurtos.services');


const router = express.Router();

const hurtos = new Hurtos()

router.get(('/'),(req, res) => {
  return res.send(hurtos.getData())
})

module.exports = router;
