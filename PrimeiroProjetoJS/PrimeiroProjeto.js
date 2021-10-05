//Jogo de Cartas 21

var baralho = [11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10];
var totalDeCartas = 52;
var maoDoJogador = [];
var maoDaBanca = [];

function sorteiaCarta () {
    
    var carta = Math.floor(Math.random() * totalDeCartas);
    totalDeCartas --;
    maoDoJogador.push(baralho[carta]);
    baralho.splice(carta, 1);

}

function sorteiaCartaBanca () {
    
    var carta = Math.floor(Math.random() * totalDeCartas);
    totalDeCartas --;
    maoDaBanca.push(baralho[carta]);
    baralho.splice(carta, 1);

}

console.log("Seja Bem vindo ao jogo 21\n\n");

sorteiaCarta();
sorteiaCartaBanca();

console.log("As cartas iniciais são: Jogador = " + maoDoJogador + " Banca = " + maoDaBanca);