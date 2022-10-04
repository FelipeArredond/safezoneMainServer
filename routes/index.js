const express = require('express');

const barriosRouter = require('./barriosRouter');
const hurtosRouter = require('./hurtosRouter');


function routerApi(app){
  const router = express.Router()
  app.use('/api/v1',router);
  router.use('/barrios',barriosRouter);
  router.use('/hurtos',hurtosRouter);
}

module.exports  = routerApi;
