/* 
    Desafio
    Faça a leitura de um valor inteiro.
    Em seguida, calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto.
    As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1.
    Na sequência mostre o valor lido e a relação de notas necessárias. 
*/
let notas100;
let notas50;
let notas20;
let notas10;
let notas5;
let notas2;
let notas1;

let entrada = 576;
//let entrada = parseInt(gets());

if (entrada > 0 && entrada < 1000000)
{
    console.log(entrada);

    notas100 = parseInt(entrada/100);
    entrada = entrada % 100;
    notas50 = parseInt(entrada/50);
    entrada = entrada % 50;
    notas20 = parseInt(entrada/20);
    entrada = entrada % 20;
    notas10 = parseInt(entrada/10);
    entrada = entrada % 10;
    notas5 = parseInt(entrada/5);
    entrada = entrada % 5;
    notas2 = parseInt(entrada/2);
    entrada = entrada % 2;
    notas1 = entrada;

    console.log(`${notas100} nota(s) de R$ 100,00`);
    console.log(`${notas50} nota(s) de R$ 50,00`);
    console.log(`${notas20} nota(s) de R$ 20,00`);
    console.log(`${notas10} nota(s) de R$ 10,00`);
    console.log(`${notas5} nota(s) de R$ 5,00`);
    console.log(`${notas2} nota(s) de R$ 2,00`);
    console.log(`${notas1} nota(s) de R$ 1,00`);
}