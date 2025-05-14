let array = [1,-2,3,-4,5,6,7,-8,9,-10];
let cont = 0
let n = 0
for(i = 0; i < 10 ; i++){
    if(array[i] >= 0){
        n += array[i]
    }
    if(array[i] < 0 ){
        cont += 1
    }
}
console.log('A soma foi %d e tem %d numeros negativos', n, cont);