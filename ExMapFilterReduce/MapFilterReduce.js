const jogosNintendo = [
    {nome: 'Mario Party', faixaetaria: 6, preco: 299.99, desconto: 0.1},
    {nome: 'Mario Odissey', faixaetaria: 8, preco: 355.00, desconto: 0.15},
    {nome: 'Animal Crossing', faixaetaria: 5, preco: 250.50, desconto: 0.2},
    {nome: 'Mario Kart 8 Deluxe', faixaetaria: 10, preco: 310.10, desconto: 0.05},
    {nome: 'Metroid', faixaetaria: 12, preco: 220.30, desconto: 0.1},
    {nome: 'Donkey Kong', faixaetaria: 7, preco: 299.99, desconto: 0.3},
    {nome: 'Disney Party', faixaetaria: 4, preco: 180.00, desconto: 0.25},
]

// Criar array com desconto já calculado dos jogos

function aplicarDesconto (jogo) {
    return jogo.preco * (1 - jogo.desconto)
}

const resultado = jogosNintendo.map(aplicarDesconto)
console.log(resultado)

// Filtrar jogos para menores de 7 anos

function menorDeSete (idade) {
    return idade.faixaetaria < 7
}

const resultado2 = jogosNintendo.filter(menorDeSete)
console.log (resultado2)

// Somar o preço de todos os jogos

function valorTotal (a, b) {
    return {preco: a.preco + b.preco}
}

const resultado3 = jogosNintendo.reduce(valorTotal)
console.log (resultado3)

let precoDoFor = 0
for (i = 0; i < jogosNintendo.length; i++) {
    precoDoFor += jogosNintendo[i].preco 
}
console.log (precoDoFor)