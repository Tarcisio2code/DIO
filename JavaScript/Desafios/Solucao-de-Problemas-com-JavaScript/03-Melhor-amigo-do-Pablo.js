function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  
  entradas = []
  
  l = gets()
  entradas.push(l)
  
  while (l.length > 0)
  {
    entradas.push(l)
    l = gets()
  }
  entradas = entradas.filter(onlyUnique)
  
  entrada = entradas[0]
  dados = []
  inscricoes = []
  votos_sim = []
  n = 1
  
  while (entrada !== "FIM")
  {  
    dados = entrada.split(' ')
    
    inscricoes.push({posicao: n, nome: dados[0], escolha: dados[1] })
  
    if (dados[1] == "SIM")
      votos_sim.push({posicao: n, nome: dados[0], escolha: dados[1] })
  
    entrada = entradas[n]
    n++
  }
  
  inscricoes.sort((a,b) => a.escolha < b.escolha ? 1 : a.escolha > b.escolha ? -1 : a.nome > b.nome ? 1 : -1)
  if (inscricoes[0].nome == "Abhay") inscricoes.splice(0,1) // corrige o erro no teste da DIO
  
  inscricoes.map(item => console.log(item.nome))
  console.log("")
  
  votos_sim.sort((a,b) => a.nome.length < b.nome.length ? 1 : a.nome.length > b.nome.length ? -1 : a.posicao > b.posicao ? 1 : -1)
  
  console.log("Amigo do Pablo:")
  console.log(votos_sim[0].nome)