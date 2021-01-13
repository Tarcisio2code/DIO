var word = 'TEXTO';

//Retorna o tamanho de uma string
const textSize = word.length;
console.log(`A palavra ${word} tem ${textSize} letras.`);

//Retorna um array quebrando a string por um delimitador
const splittedText = word.split('x');
console.log(`\nNovo array de ${word} com as posições separadas por x:`, splittedText);

//Busca por um valor e substitui por outro
const replacedText = word.replace('TEXT', 'txeT');
console.log(`\nSubstuindo Text por txeT na palavra ${word} temos:`, replacedText);

//Retorna uma fatia de uma string
const secondToEnd = word.slice(1);
console.log(`\nExibindo uma fatia de ${word} a partir da segunda letra fica`,secondToEnd);

const lastChar = word.slice(-1);
console.log(`\nA última letra de ${word} é`, lastChar);

const allWithoutLastChar = word.slice(0, -1);
console.log(`\nExibindo ${word} menos a última letra fica`, allWithoutLastChar);

//Retrona N caracteres apartir de uma posição
const twoCharBeforeFirstPos = word.substr(0, 2);
console.log(`\nAs duas primeiras letras de ${word} são`,twoCharBeforeFirstPos);
