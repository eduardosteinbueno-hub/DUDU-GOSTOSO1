let alunos = [
    {nome:"Eduardo",nota:9},
    {nome:"Bruno",nota:7}
]

let nomes = alunos.map(function (aluno){
    return aluno.nome
})
console.log(nomes)

