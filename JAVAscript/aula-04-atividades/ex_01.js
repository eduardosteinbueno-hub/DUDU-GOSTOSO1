let pessoa = {
    nome:"Eduardo",
    idade:16,
    altura:1.64 ,
    estudante:"verdadeiro"
}

for(let chave in pessoa){
    console.log(`${chave} = ${pessoa[chave]}`)
}