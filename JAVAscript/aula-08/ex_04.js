let alunos=[
    {nome:"Eduardo",nota:9},
    {nome:"Bruno",nota:5}
]

let aprovados = alunos.filter(function(aluno){
    return aluno.nota >=7
})
console.log(aprovados)