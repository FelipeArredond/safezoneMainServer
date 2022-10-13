const express = require('express');
const barrios = require('../components/barrios/network');
const hurtos = require('../components/hurtos/network')

const routes = function(server) {
  server.use('/barrios', barrios)
  server.use('/hurtos',hurtos)
}

module.exports = routes;
