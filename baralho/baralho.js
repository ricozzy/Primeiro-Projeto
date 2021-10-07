//Jogo de Cartas 21

var baralho = [11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10];
var maoDoJogador = [];
var maoDaBanca = [];
var num;
var destino;

function sorteiaCarta (num, destino) {
    
    for (var i = 0; i < num; i++) {
    
    var carta = Math.floor(Math.random() * baralho.length);
    
    if (destino == 1) {
            maoDoJogador.push(baralho[carta]);
            baralho.splice(carta, 1);
            
    }
    else { 
            maoDaBanca.push(baralho[carta]);
            baralho.splice(carta, 1);
            
    }
      
    }

    switch (destino) {
        case 1: return (maoDoJogador);
    
        case 2: return (maoDaBanca);
    }
}


console.log("Seja Bem vindo ao jogo 21\n");
console.log("As cartas iniciais do Jogador são = " + sorteiaCarta(30, 1));
console.log("As cartas iniciais da Banca são = " + sorteiaCarta(10, 2));
console.log("O baralho atual é: " + baralho);