//To demostrate how the algorithm might be used with an actual API
const SPACEX_API = 'https://api.spacexdata.com/v3/launches';
//Axios library
const axios = require('axios');
//Determinando la complejidad de un algoritmo

//Algoritmo Alfa
async function algoritmoAlfa(payloadId, payloadAPI) {
    let respuesta = await fetch(payloadAPI);
    let data = await respuesta.json();
    for (let i = 0; i < data.length; i++) {
        let payloads = data[i].rocket.second_stage['payloads'];
        for (let j = 0; j < payloads.length; j++) {
            if (payloadId == payloads[j].payload_id) {
                return true;
            }
        }
    }
    return false;
}

//Algoritmo Beta
async function algoritmoBeta(payloadId, payloadAPI) {
    let arreglosCoinciden = (arreglo1, arreglo2) => {
        if (arreglo1.length != arreglo2.length) {
            return false;
        }
        for (let i = 0; i < arreglo1.length; i++) {
            if (arreglo1[i] != arreglo2[i]) {
                return false;
            }
        }
        return true;
    };
    let respuesta = await fetch(payloadAPI);
    let data = await respuesta.json();
    let payloadIdArray = payloadId.split('');
    for (let i = 0; i < data.length; i++) {
        let payloads = data[i].rocket.second_stage.payloads;
        for (let j = 0; j < payloads.length; j++) {
            if (arreglosCoinciden(payloadIdArray, payloads[j].payload_id.split(''))) {
                return true;
            }
        }
    }
    return false;
}
//Algoritmo Delta
async function algoritmoDelta(payloadId, payloadAPI) {
    let respuesta = await fetch(payloadAPI);
    let data = await respuesta.json();
    let listaDePayloads = [];
    let longitudData = data.length;

    for (let i = 0; i < longitudData; i++) {
        let payloads = data[i].rocket;
        listaDePayloads.push(...payloads.second_stage['payloads']);
    }

    for (let i = 0; i < listaDePayloads.length; i++) {
        let localPayloadId = listaDePayloads[i].payload_id;
        if (localPayloadId == payloadId) {
            return true;
        } else {
            return false;
        }
    }
}

async function testSearchTime(algoFunction, payloadId) { 
    const startTime = performance.now(); 
    const result = await algoFunction(payloadId, SPACEX_API); 
    const endTime = performance.now(); return { time: endTime - startTime, result 
    
    }; 
}

(async () => {
    const payloadId = 'FalconSAT-2'; // Replace with different IDs for testing
  
    const alphaResult = await testSearchTime(algoritmoAlfa, payloadId);
    const betaResult = await testSearchTime(algoritmoBeta, payloadId);
    const deltaResult = await testSearchTime(algoritmoDelta, payloadId);
  
    console.log('Alpha Search Time:', alphaResult.time);
    console.log('Alpha Result:', alphaResult.result);
  
    console.log('Beta Search Time:', betaResult.time);
    console.log('Beta Result:', betaResult.result);
  
    console.log('Delta Search Time:', deltaResult.time);
    console.log('Delta Result:', deltaResult.result);
  })();
  


