const express = require('express');
const barrios = require('../barrios')

const router = express.Router();

barrios.features.map((feature) => {
  feature.properties.SECURITYLEVEL = 0;
})

router.get(('/'),(req, res) => {
  res.json(barrios.features.map((feature) => {
    return feature.properties
  }));
})

module.exports = router;
