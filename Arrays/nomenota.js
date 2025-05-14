var prompt = require('prompt-sync')();

let nome = []
let op, c=0, i=0, z=0
let nota = []
do{
    nome[i] = prompt('Digite um nome: ')
    i++;
    op = prompt('Quer continuar?s/n')
}while(op == 's')

for(c = 0; c < nome.length; c++){
    nota[c] = prompt('Digite a nota do %s: ',nome[c])
}

for(z = 0; z < nome.length; z++){
    console.log('A nota do %s: %s',nome[z], nota[z]);
}