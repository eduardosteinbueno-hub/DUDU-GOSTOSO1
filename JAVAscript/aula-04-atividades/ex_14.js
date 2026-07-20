let nomes = []
let idades = []

amigos.forEach(function(amigo) {
  nomes.push(amigo.nome)
  idades.push(amigo.idade)
})

console.log("Nomes:", nomes)  // ["Ana", "Pedro", "Carla", "Lucas"]
console.log("Idades:", idades)  // [25, 30, 28, 22]