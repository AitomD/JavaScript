var prompt = require("prompt-sync")();

let array = [1, 5, 2, 3, 7]
let n = 0
for(i=0 ; i < 5 ; i++){
    n += array[i]
}
media = n / 5;
console.log('A media foi %d',media);
