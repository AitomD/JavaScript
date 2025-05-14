var prompt = require('prompt-sync')()

let produto = {
 nome: "Smartphone XYZ",
 preco: 1500.00,
 marca: "TechBrand",
 categoria: "Eletrônicos"
};

console.log(produto.nome);
console.log(produto['preco']);
console.log(produto.categoria);
