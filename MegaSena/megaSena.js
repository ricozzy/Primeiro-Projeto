var conjuntoDosNumeros = [];
var numerosSorteados = [];
var numerosEscolhidos = [];
var acertos = []
var num;

for (i=1; i<=60; i++) {
    conjuntoDosNumeros.push(i);
}

function sorteiaNumeros(qtd) {

    for (i=0; i<qtd; i++) {
        num = Math.floor(Math.random() * conjuntoDosNumeros.length);  
        numerosSorteados.push(conjuntoDosNumeros[num]);
        conjuntoDosNumeros.splice(num, 1);
    }

    return (numerosSorteados);
}

function simulacao(num1, num2, num3, num4, num5, num6, vezes) {
    numerosEscolhidos = [num1, num2, num3, num4, num5, num6]

    for (i=0; i<vezes; i++) {
        numerosSorteados.filter(function(element) {
            if (numerosEscolhidos.indexOf(element) !== -1) {
                acertos.push(element)
            }
        });
        
    }
}
sorteiaNumeros (6);
simulacao (1,2,3,4,5,6,1);

console.log (conjuntoDosNumeros);
console.log (numerosEscolhidos);
console.log (numerosSorteados);
console.log ("Você acertou o(s) número(s): " + acertos);