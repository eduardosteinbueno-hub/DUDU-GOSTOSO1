let usuario = {
  nome: "Maria",
  email: "maria@email.com"
}

console.log("Existe 'nome'?", "nome" in usuario)  // true
console.log("Existe 'senha'?", "senha" in usuario)  // false
console.log("Existe 'email'?", "email" in usuario)  // true