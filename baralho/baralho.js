//Jogo de Cartas 21

var baralho = [11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10];
var totalDeCartas = 52;
var maoDoJogador = [];
var maoDaBanca = [];
var num;

function sorteiaCarta (num) {
    
    for (var i = 0; i < num; i++) {
    
    var carta = Math.floor(Math.random() * totalDeCartas);
    totalDeCartas --;
    maoDoJogador.push(baralho[carta]);
    baralho.splice(carta, 1);

    }

    return (maoDoJogador);

}

function sorteiaCartaBanca () {
    
    var carta = Math.floor(Math.random() * totalDeCartas);
    totalDeCartas --;
    maoDaBanca.push(baralho[carta]);
    baralho.splice(carta, 1);

}

console.log("Seja Bem vindo ao jogo 21\n");
console.log("As cartas iniciais do Jogador são = " + sorteiaCarta(30));
console.log("Total de cartas do Baralho agora é de " + totalDeCartas);
console.log("O baralho atual é: " + baralho);