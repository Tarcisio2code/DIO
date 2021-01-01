let palavra = '';
let palavraCorreta;

while (true) {
  palavra = gets()
  palavraCorreta = [];

  if (!palavra || palavra === '' || palavra.length > 30){
    break;
  }

  const metade = -Math.floor(palavra.length / 2)

  for (let pos = -1; pos >= metade; pos--) {
    if ( palavra.slice(pos) === palavra.slice(pos * 2, pos) ){
      palavraCorreta.push(palavra.slice(0, pos));
    }
  }

  if (palavraCorreta.length === 0) {
    console.log(palavra)
  }
  else{
    for (const palavraCorreta2 of palavraCorreta.sort()) {
      console.log(palavraCorreta2)
    }
  }
}
