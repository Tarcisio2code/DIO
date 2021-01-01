let vogais = ''
let frase = ''

while(true){
  vogais = gets();
  if(!vogais || vogais == '') {
    break;
  }
  const matrizVogais = Array.from(vogais);
  frase = gets();
  const matrizFrase = Array.from(frase);
  let qtdeVogais = 0;
  matrizVogais.map(item => {
    const matrizFiltrada = matrizFrase.filter(x => x == item);
    qtdeVogais += matrizFiltrada.length;
  })
  console.log(qtdeVogais)
}