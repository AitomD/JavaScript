var prompt = require('prompt-sync')();

let num = [1,2,3,4,5,6,7,8,9,10]
let p = null;
let val = prompt('qual valor será buscado?')
for(i = 0; i<10 ; i++){
    if(num[i] == val){
        p = i;
    }
}

if(p == null){
    console.log('Não foi encontrado esse valor');
}
else{
    console.log('O valor %d foi encontrado na posição %d',val ,p);
}