'use strict'

function BinarioADecimal(num) {
  
 let resultado= 0;
 let numReverse= num.split('').reverse().join('');  // puedo sacar el join y en el resultado agrego:
 for(let i=0; i<numReverse.length; i++){
  resultado+= numReverse[i]*2**i;       // Math.pow(2, i)* parseInt (numReverse[i])
 }
 return resultado;
}

function DecimalABinario(num) {    // puedo resolverlo con un array
                                    // let result= [];
let binario= '';                    // no uso binario
while (num!==0){                    // while (num>0)
  binario+= num%2;                  // result.push (num%2);
  num= Math.floor(num/2);           // igual
}
return binario.split('').reverse().join('');  //no me haria falta el split xq ya es un arreglo el result
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}