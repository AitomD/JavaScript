var prompt = require('prompt-sync')();

let nome = []
let op,i=0

do{
    nome[i] = prompt('informe um nome: ')
    i++;
    op = prompt('Deseja continuar? S/N')
}while(op == "s")

console.log('Foi informado %d nomes',i);
console.log(nome);

