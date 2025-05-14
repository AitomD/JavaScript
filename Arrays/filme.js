var prompt = require('prompt-sync')()

let filme = {
    titulo: "piratas do caribe",
    diretor: "Aitom donatoni",
    ano: 2010,
    genero: "Comédia"
};

//Usando notação com pontos .

console.log("Usando pontos");
console.log(filme.diretor); //Faz com que pegue somente a o objeto "diretor" dentro da variavel filme
console.log(filme.titulo); // """"""""""
console.log(filme.genero); // """"""""""
console.log("\n");

//Usando notação com colchetes []
console.log("Usando colchetes");
console.log(filme['diretor']); //Faz com que pegue um objeto dentro da variavel filme,mas chamando como se fosse um array porem usa ''
console.log(filme['titulo']); 
console.log(filme['genero']);
console.log("\n");

//Usando variaveis

let lancamento = "ano"; //Faz a variavel "lancamento" receber a mesma informaçao do objeto ano da variavel "filme"

console.log(filme[lancamento]);

