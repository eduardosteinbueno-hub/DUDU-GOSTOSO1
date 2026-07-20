let filme = {
  titulo: "Matrix",
  diretor: "Wachowski",
  ano: 1999,
  genero: "Ficção Científica"
}

for(let chave in filme) {
  console.log(`${chave}: ${filme[chave]}`)
}