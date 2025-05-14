var prompt = require('prompt-sync')();

let tarefas = []
let t;
let op;

op = prompt('deseja adicionar uma tarefa?')
if(op == "sim"){ 
do{
    let t = prompt('Digite qual tarefa deseja adicionar: ');
    tarefas.push(t);
    console.log("Essa é a lista atualmente: %s",tarefas);
    op = prompt('Ainda deseja adicionar tarefas? S/N ');
}while(op == "sim")
}
console.log("Ao final a lista completa foi: %s", tarefas);
