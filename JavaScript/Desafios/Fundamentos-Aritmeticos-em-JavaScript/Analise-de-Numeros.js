/*
    Desafio
    Você deve fazer a leitura de 5 valores inteiros.
    Em seguida mostre quantos valores informados são pares,
    quantos valores informados são ímpares, 
    quantos valores informados são positivos e quantos valores informados são negativos.
*/
let entrada = new Array(5);

for (let i=0; i < entrada.length; i++)
{
    entrada[i] = parseInt(gets());
}

let valoresPares = entrada.filter(valor => Math.abs(valor) % 2 == 0);
let valoresImpares = entrada.filter(valor => Math.abs(valor) % 2 != 0);
let valoresPositivos = entrada.filter(valor => valor > 0);
let valoresNegativos = entrada.filter(valor => valor < 0);

console.log(`${valoresPares.length} valor(es) par(es)`);
console.log(`${valoresImpares.length} valor(es) impar(es)`);
console.log(`${valoresPositivos.length} valor(es) positivo(s)`);
console.log(`${valoresNegativos.length} valor(es) negativo(s)`);
