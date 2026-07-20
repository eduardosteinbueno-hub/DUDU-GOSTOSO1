// Criando o array de livros
let biblioteca = [
  {titulo: "Dom Casmurro", autor: "Machado de Assis", paginas: 256, lido: true},
  {titulo: "1984", autor: "George Orwell", paginas: 328, lido: true},
  {titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", paginas: 1178, lido: false},
  {titulo: "Harry Potter", autor: "J.K. Rowling", paginas: 264, lido: true},
  {titulo: "O Hobbit", autor: "J.R.R. Tolkien", paginas: 310, lido: false}
]

// 1. Listar todos os títulos com autor
console.log("Catalogo de livros:")
biblioteca.forEach(function(livro) {
  console.log(`"${livro.titulo}" por ${livro.autor}`)
})

// 2. Object.keys no primeiro livro
console.log("Propriedades do primeiro livro:", Object.keys(biblioteca[0]))

// 3. for...in no primeiro livro
console.log("Detalhes do primeiro livro:")
for(let chave in biblioteca[0]) {
  console.log(`${chave}: ${biblioteca[0][chave]}`)
}