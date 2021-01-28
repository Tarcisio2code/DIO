/*
    Você deve calcular o consumo médio de um automóvel
    onde será informada a distância total percorrida (em Km) 
    e o total de combustível consumido (em litros). 
*/
let distanciaPercorrida;
let combustivelGasto;
let consumoMedio;

distanciaPercorrida = parseInt(gets());
combustivelGasto = parseFloat(gets());

consumoMedio = parseFloat(distanciaPercorrida/combustivelGasto);

console.log(`${consumoMedio.toFixed(3)} km/l`);