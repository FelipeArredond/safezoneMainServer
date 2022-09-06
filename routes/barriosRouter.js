const express = require('express');
const barrios = require('../barrios')

const router = express.Router();

// barrios.features.map((feature) => {
//   feature.properties.SECURITYLEVEL = 0;
// })

const barriosData = [];

const barriosFiltering = () => {
  barrios.features.map((feature) => {
    barriosData.push(feature)
  })
}

barriosFiltering();

router.get(('/'),(req, res) => {
  return res.json(barrios.features)
})

module.exports = router;
