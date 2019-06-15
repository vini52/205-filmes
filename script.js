let inputPesquisa = document.querySelector("#inputPesquisar");
let btnPesquisa = document.querySelector("nav div button"); 
let filmes = [
    {titulo: "doze é demais", diretor: "shawn levy", genero: "comedia", imagem: 1},
    {titulo: "a freira", diretor: "corin hardy", genero: "terror", imagem: 2},
    {titulo: "ate o ultimo homem", diretor: "mel gibson", genero: "guerra", imagem: 3},
    {titulo: "dunkir", diretor: "christopher nolan", genero: "guerra", imagem: 4},
    {titulo: "cartas para julieta", diretor: "gary winick", genero: "romance", imagem: 5},
    {titulo: "ela é demais pra mim", diretor: "jim fiel smith", genero: "comedia", imagem: 6},
    {titulo: "friends", diretor: "evan handler", genero: "serie", imagem: 7},
    {titulo: "hotel transivenia 3", diretor: "genndy tartakovsky", genero: "infantil", imagem: 8},
    {titulo: "interestelar", diretor: "christopher nolan", genero: "ficcao cientifica", imagem: 9},
    {titulo: "os vingadores", diretor: "anthony russo", genero: "ficcao cientifica", imagem: 10},
    {titulo: "o exorcismo de emily rose", diretor: "scott derrickson", genero: "terror", imagem: 11},
    {titulo: "o rei leao", diretor: "jon favreau", genero: "infantil", imagem: 12},
    {titulo: "game of thrones", diretor: "david nutter", genero: "serie", imagem: 13},
    {titulo: "clube da luta", diretor: "david fincher", genero: "acao", imagem: 14},
    {titulo: "esqueceram de mim", diretor: "chris columbus", genero: "comedia", imagem: 15},
    {titulo: "o silencio", diretor: "john leonetti", genero: "terror", imagem: 16},
    {titulo: "operacao baba", diretor: "adam shankman", genero: "comedia", imagem: 17},
    {titulo: "velozes e furiosos 2", diretor: "john singleton", genero: "", imagem: 18},
    {titulo: "truque de mestre", diretor: "louis leterrier", genero: "acao", imagem: 19},
    {titulo: "kimi no nawa", diretor: "makoto shinkai", genero: "anime", imagem: 20},
    {titulo: "karate kid", diretor: "harald zwart", genero: "acao", imagem: 21},
    {titulo: "eu sou a mae", diretor: "grant sputore", genero: "ficcao cientifica", imagem: 22},
]
let img = [];
let caminho = [];
let verTitulo = [];
for(let i = 1; i < 23; i++){
    img[i] = document.querySelector("#Img" + i);
    caminho[i] = img[i].src = `img/${i}.jpg`;
}
for(let j = 0; j < 22; j++){
    let teste = document.querySelectorAll("section header div p");
    teste[j].innerHTML = `${filmes[j].titulo}`;
}

function pesquisarFilme(){
    for(let filme of filmes){
        if(inputPesquisa.value == filme.titulo || inputPesquisa.value == filme.diretor || inputPesquisa.value == filme.genero){
            let heigthSection = document.querySelector("body");
            heigthSection.style.gridTemplateRows = "20vh 65vh 100vh 20vh";
            let backColorSection = document.querySelector("#sectionBackColor");
            backColorSection.style.backgroundColor = "lightgray";
            let ocultar = document.querySelector("section header");
            ocultar.style.display = "none";
            let resPesquisa = document.querySelector("#asidePesquisa");
            resPesquisa.classList.add("resImgPesquisa");
            let nomeFilme = document.querySelector("section aside p");
            nomeFilme.innerHTML = `${filme.titulo}`;
            let imgPesquisa = document.querySelector("#imgRes");
            imgPesquisa.src = `img/${filme.imagem}.jpg`;
        }
    }
}

btnPesquisa.onclick = pesquisarFilme;