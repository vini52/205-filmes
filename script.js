let inputPesquisa = document.querySelector("#inputPesquisar");

let filmes = [
    {titulo: "doze é demais", diretor: "shawn levy", genero: "comedia" },
    {titulo: "a freira", diretor: "corin hardy", genero: "terror"},
    {titulo: "ate o ultimo homem", diretor: "mel gibson", genero: "guerra"},
    {titulo: "dunkir", diretor: "christopher nolan", genero: "guerra"},
    {titulo: "cartas para julieta", diretor: "gary winick", genero: "romance"},
    {titulo: "ela é demais pra mim", diretor: "jim fiel smith", genero: "comedia"},
    {titulo: "fiends", diretor: "evan handler", genero: "serie"},
    {titulo: "hotel transivenia 3", diretor: "genndy tartakovsky", genero: "infantil"},
    {titulo: "interestelae", diretor: "christopher nolan", genero: "ficcao cientifica"},
    {titulo: "os vingadores", diretor: "anthony russo", genero: "ficcao cientifica"},
    {titulo: "o exorcismo de emily rose", diretor: "scott derrickson", genero: "terror"},
    {titulo: "o rei leao", diretor: "jon favreau", genero: "infantil"},
    {titulo: "game of thrones", diretor: "david nutter", genero: "serie"},
    {titulo: "clube da luta", diretor: "david fincher", genero: "acao"},
    {titulo: "esqueceram de mim", diretor: "chris columbus", genero: "comedia"},
    {titulo: "o silencio", diretor: "john leonetti", genero: "terror"},
    {titulo: "operacao baba", diretor: "adam shankman", genero: "comedia"},
    {titulo: "velozes e furiosos 2", diretor: "john singleton", genero: ""},
    {titulo: "truque de mestre", diretor: "louis leterrier", genero: "acao"},
    {titulo: "kimi no nawa", diretor: "makoto shinkai", genero: "anime"},
    {titulo: "karate kid", diretor: "harald zwart", genero: "acao"},
    {titulo: "eu sou a mae", diretor: "grant sputore", genero: "ficcao cientifica"},
]

let i = 1;
let img = [];
let caminho = [];

for(i; i < 23; i++){
    img[i] = document.querySelector("#Img" + i);
    caminho[i] = img[i].src = `img/${i}.jpg`;
}