const express = require('express');
const barrios = require('../barrios')
const barriosNew = require('../planeacion_gdb.json')

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

router.get(('/barriosNew'),(req, res) => {
  return res.json(barriosNew.features)
})


module.exports = router;
