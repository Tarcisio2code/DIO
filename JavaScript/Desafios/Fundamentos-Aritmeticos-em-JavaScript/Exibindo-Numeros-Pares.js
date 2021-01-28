/* 
    Desafio
    Crie um programa que leia um número e mostre os números pares até esse número, 
    inclusive ele mesmo.
*/
let entrada = parseInt(gets());

if (entrada > 0)
{
    for (let i=1; i <= entrada; i++)
    {
      if (i % 2 === 0)
        console.log(i);
    }
}
