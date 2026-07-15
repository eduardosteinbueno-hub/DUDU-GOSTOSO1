let filmes =[
    {titulo:"Pantera Negra",ano:2018,genero:"animação"},
    {titulo:"Carros 3",ano:2019,genero:"animação"},
    {titulo:"Tory Story ",ano:2026,genero:"animação"},

]

filmes.forEach(function(filme){
    console.log(`${filme.titulo}-${filme.ano}-${filme.genero  }`)

})
