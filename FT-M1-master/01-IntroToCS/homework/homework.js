'use strict'

function BinarioADecimal(num) {
  
 let resultado= 0;
 let numReverse= num.split('').reverse().join('');
 for(let i=0; i<numReverse.length; i++){
  resultado+= numReverse[i]*2**i;
 }
 return resultado;
}

function DecimalABinario(num) {
  
let binario= '';
while (num!==0){
  binario+= num%2;
  num= Math.floor(num/2);
}
binario= binario.split('').reverse().join('')
return binario;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}