const barrios = require('./store')

function getBarrios(){
  return barrios.features;
}

function getBarriosNames(){
  return(barrios.features.map((barrio) => {
    return barrio.properties.NOMBRE;
  }))
}

function getBarriosComunas(){
  return(barrios.features.map((barrio) => {
    return barrio.properties.LIMITECOMUNACORREGIMIENTOID;
  }))
}

module.exports = {
  getBarrios,
  getBarriosNames,
  getBarriosComunas
}
