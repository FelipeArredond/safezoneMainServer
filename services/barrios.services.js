const barriosNew = require('../planeacion_gdb.json')

class Barrios{

  constructor(){
    this.barrios = barriosNew
  }

  returnBarrios(){
    return this.barrios.features;
  }

  returnBarriosNames(){
    return(this.barrios.features.map((barrio) => {
      return barrio.properties.NOMBRE;
    }))
  }

  returnBarriosComunas(){
    return(this.barrios.features.map((barrio)=>{
      return barrio.properties.LIMITECOMUNACORREGIMIENTOID;
    }))
  }

}

module.exports = Barrios;
