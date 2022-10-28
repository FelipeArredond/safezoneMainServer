const express = require('express');
const barrios = require('../components/barrios/network');
const hurtos = require('../components/hurtos/network');
const reportes = require('../components/reportes/network');
const users = require('../components/usuarios/network');
const dashboard = require('../components/dashboardData/network')

const routes = function(server) {
  server.use('/barrios', barrios)
  server.use('/hurtos',hurtos)
  server.use('/reportes',reportes)
  server.use('/usuarios',users)
  server.use('/dashboard',dashboard)
}

module.exports = routes;
