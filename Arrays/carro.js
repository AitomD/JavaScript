var prompt = require('prompt-sync')()

let carro = {
    marca: 'fiat',
    modelo: 'uno',
    ano: 2010
}

// carro.cor é usado para adicionar um novo valor dentro do objeto
carro.cor = 'azul'
carro['tetosolar'] = true
let novoatributo = prompt('nome do novo atributo: ')
let valoratributo = prompt('digite o valor do atributo: ')
carro[novoatributo] = valoratributo
console.log(carro);



