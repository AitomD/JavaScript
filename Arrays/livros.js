var prompt = require('prompt-sync')();


let livros = ['Senhor dos Aneis', 'Harry Potter', 'Game of Thrones', 'Medico e o Monstro', 'Banana de pijama', 'O Diario de um banana', 'Cronicas de fogo'];
let i=0;

console.log("Função mostra livros\n");

for(i = 0; i < livros.length; i++){
    console.log("Posição %d: %s", i, livros[i]);
}

console.log("Função para remover livros\n");

for(i = livros.length; i > 0; i--){
    console.log(livros);
    livros.pop(livros[i]);
    console.log('----------');
    
    if(livros.length == 0){
        console.log("Não há mais livros para remover");   
    }
}