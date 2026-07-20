let amigos = [
  {nome: "Ana", idade: 25},
  {nome: "Pedro", idade: 30},
  {nome: "Carla", idade: 28},
  {nome: "Lucas", idade: 22}
]

amigos.forEach(function(amigo) {
  console.log(`Nome: ${amigo.nome}, Idade: ${amigo.idade}`)
})