const myNumber = 12.70320;

//transforma número para string
const numberAsString = myNumber.toString();
console.log(`Número ${myNumber} transformado em string:`,numberAsString);

//retorna número com casas decimais
const fixedTowDecimals = myNumber.toFixed(2);
console.log(`\nNúmero ${myNumber} com duas casas decimais:`, fixedTowDecimals);

//transforma uma string em float. 
//Se a strind tiver 0 no final este não será considerado.
console.log(`\nString ${numberAsString} parseada para float:`, parseFloat(numberAsString));

//transforma uma string em int
console.log(`\nString ${numberAsString} parseada para int:`, parseInt(numberAsString));