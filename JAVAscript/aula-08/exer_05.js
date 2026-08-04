let produtos = [
    {id:1,nome:"Fone",preco:59,categoria:"Eletronico"},
    {id:2,nome:"Geladeira",preco:2599,categoria:"eletro"},
    {id:3,nome:"Mause",preco:109,categotia:"informatica"},
    {id:4,nome:"Teclado",preco:299,categotia:"informatica"},
    {id:5,nome:"Fogão",preco:599,categotia:"Eletro"}
]
let nomes= produtos.map(function(item){
    return item.name
})
console.log(nomes)

let eletro=produtos.filter(function(item){
    return item === "eletro"
})
console.log(eletro)

let encontrado = produtos.find(function(item){
    return item.id === 3
})

console.log(encontrado)

let nomeMaiores = produtos.filter(function(item){
    return item.preco > 500
}).map(function(item){
    return item.nome
})
console.log(nomeMaiores)