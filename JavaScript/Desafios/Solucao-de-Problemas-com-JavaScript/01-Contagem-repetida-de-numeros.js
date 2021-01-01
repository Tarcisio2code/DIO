let qtdeNumeros = parseInt(gets());
let entrada = 0
let listadeNumeros = []

for (let i = 1; i <= qtdeNumeros; i++) {
  entrada = parseInt(gets())
  
  if ((entrada < 1 || entrada > 2000)) {
    continue;
  }

  listadeNumeros = [...listadeNumeros, entrada];
}

const mapNumeros = Array.from(new Set(listadeNumeros))
  .sort((a, b) => a - b)
  .map(v => ([v, 0]))

let filtrodeNumeros = new Map(mapNumeros)

listadeNumeros.forEach(n => {
  filtrodeNumeros.set(n, filtrodeNumeros.get(n) + 1)
})

for (const [numero, qtdeVezes] of filtrodeNumeros) {
   console.log(`${numero} aparece ${qtdeVezes} vez(es)`)
}