/* 
    Desafio
    Crie um programa que leia 6 valores. 
    Você poderá receber valores negativos e/ou positivos como entrada, devendo desconsiderar os valores nulos.
    Em seguida, apresente a quantidade de valores positivos digitados.
 */
let entrada = 0;
let positivos = 0;

for (let i=1; i <= 6; i++)
{
    entrada = parseFloat(gets());

    if (entrada != null && entrada > 0)
    {
      positivos++;
    }
}

console.log(`${positivos} valores positivos`);

