let inputPesquisa = document.querySelector("#inputPesquisar");
let img = document.querySelector("header img");
let filmes = [
    {titulo: "doze é demais", diretor: "shawn levy", genero: "comedia" },
    {titulo: "a freira", diretor: "corin hardy", genero: "terror"},
    {titulo: "", diretor: "", genero: ""},
    {titulo: "", diretor: "", genero: ""},
    {titulo: "", diretor: "", genero: ""},
    {titulo: "", diretor: "", genero: ""},
    {titulo: "", diretor: "", genero: ""},
    {titulo: "", diretor: "", genero: ""},
    {titulo: "", diretor: "", genero: ""},
    {titulo: "", diretor: "", genero: ""},
]
for(let i=1; i < 4; i++){
    let caminho = img.src = `img/${i}.jpg`
    console.log(caminho);
}
