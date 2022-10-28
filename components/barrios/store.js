const barriosData = require('./planeacion_gdb.json');
const Model = require('../hurtos/model')

function findMaxScore(dataHood){
  let arr = Object.values(dataHood)
  return Math.max.apply(null,arr)
}

function colorAssignation(val,maxScore){
  if(val > (maxScore*0.08)){
      return 'red'
  }
  else if(val < (maxScore*0.03)){
      return 'green';
  }else if((maxScore*0.04) < val < (maxScore*0.7)){
      return 'yellow';
  }
}

function calculate(data){
  let dangerZones = {}
  let cont = 0;
  for(let i = 0; i < data.length; i += 1){
      if(dangerZones[data[i]] === undefined){
          dangerZones[data[i]] = 1;
      }else{
          dangerZones[data[i]] += 1;
      }
      cont += 1
  }
  return dangerZones
}

function setLevelSecurityToPlaces(places,dataPerHood,maxScore){
  let dangerObjects = Object.keys(dataPerHood)
  for(let i = 0; i < places.length; i += 1){
      for(let j = 0; j < dangerObjects.length; j += 1){
          if(places[i].properties.CODIGO === dangerObjects[j]){
              places[i].properties['SEC_LEVEL'] = colorAssignation(dataPerHood[dangerObjects[j]],maxScore)
          }
      }
  }
}

async function fetchHurtosPerHood(){
  const data = await Model.find({});
  const filtered = []
  data.map((element) => {
    filtered.push(element.codigo_barrio.substring(1))
  })
  const dataCalculated = calculate(filtered)
  setLevelSecurityToPlaces(barriosData.features,dataCalculated,findMaxScore(dataCalculated))
  console.log('Analitics Done')
}

fetchHurtosPerHood()

module.exports = barriosData
