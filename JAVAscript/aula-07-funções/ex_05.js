function verificarIdade(idade){
    if(idade < 12){
        return"criança"
    }
    else if(idade < 18){
        return "adolecente"
    }
    else if (idade < 65){
        return "adulto"
    }
    else{
        return"idoso"
    }
}

let idades = [12,15,18,56,67]
idades.forEach(function(item){
    console.log(verificarIdade(item))
})