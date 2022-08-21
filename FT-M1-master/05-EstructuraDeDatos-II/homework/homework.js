"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y 
    de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. 
  En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como 
  parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {          // class LinkedList{
  this.size= 0;                 // constructor(){
  this.head= null;              // this.head= null }
}                               // add(){}
                                // remove(){}   y el search tmb }
function Node(value) {          // class Node{
  this.value= value;            // constructor(value){
  this.next= null;              //this.value= value;
}                               // this.next= null }

LinkedList.prototype.add= function(value){
  var node= new Node(value);
  var current= this.head; 

  if (!current){   //la lista está vacía, current es null 
    this.head= node;
  } else {

  while (current.next){    // es decir, la lista no está vacía
    current= current.next;    // recorro cada nodo y le voy cambiando el puntero q apunta a null
  }
  current.next= node;
  }

  this.size++;
  //return node;
}

LinkedList.prototype.remove= function(){
  let current= this.head;
  if(this.size===0){
    return null;    
  }
  if(this.size===1){   // hay un solo nodo en la lista      if(this.head && !this.head.next) y no hace falta el size
    let aux= current.value;
    this.head= null;
    this.size--;
    return aux;
  }
  while (current.next.next){
    current= current.next;
  }
  let lastOne= current.next.value;
  current.next= null;
  this.size--;
  return lastOne;
}

LinkedList.prototype.search= function(data){
  if(this.head===null) return null;

  let current= this.head;

  while(current){  //this.head!==null
    if (current.value=== data){
      return current.value;
    } else if(typeof data==='function'){
      if (data(current.value)){
        return current.value;
      }
    }
    current= current.next;
  }
  return null;
}

LinkedList.prototype.insert= function(data, index){      // inserta un valor data en la posición index de la lista
 if (index<0 || index> this.size) return null;

  let node= new Node(data);
  let current= this.head;
  let previous= null;
  
 if(index===0){   //quiero insertar el nuevo nodo al inicio de la lista
  node.next= current;
  this.head= node;
  } else{
  for (let i=0; i<index; i++){
  previous= current;
  current= current.next;
  }
  
  node.next= current;
  previous.next= node;
  }
  this.size++;
  }

LinkedList.prototype.removeByData= function(data){
  let current= this.head;
  let previous= null;

  while(current!== null){
    if (current.value===data){
      if (!previous){      // no tiene nodo previo, es decir, es el 1ro de la lista
        this.head= current.next;
      } else{
        previous.next= current.next;
      };
      this.size--;
      return current.value;      
    };
    previous= current;
    current= current.next;
  }
  return null;
}

LinkedList.prototype.removeFrom= function(index){     //elimina un nodo de una cierta posición (index)
if (index < 0 || index > this.size) return null;
let current= this.head;
let previous= null;

if(index===0){
  this.head= current.next;
} else{
  for (i=0; i < index; i++){
    previous= current;
    current= current.next;
  }
  previous.next= current.next;
}
this.size--;
return current.data;
}



/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar 
  la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, 
  pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de 
  cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; 
  de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto 
  en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla 
con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico 
(determinado al hashear la clave)
*/

function HashTable() {
 this.numBuckets= 35;
 this.buckets= [];
}

HashTable.prototype.hash= function(dato){
  let sum=0;
  for (let i=0; i<dato.length; i++){
    sum+= dato.charCodeAt(i);
  }
return sum % this.numBuckets;
}

HashTable.prototype.set= function(key, value){
  if (typeof key !== 'string'){
    throw new TypeError ('Keys must be strings');
  }
  let aux= this.hash(key);   //guardo la posición en la var aux
   if (this.buckets[aux]=== undefined){
    this.buckets[aux]= {};
   }
  this.buckets[aux][key]= value;   // si ya existe la key que le paso, solo reasigna su valor y si no existe aún esa key, la crea como propiedad --> {key: value}
}

HashTable.prototype.get= function(key){
  let aux= this.hash(key);
  return this.buckets[aux][key];
}

HashTable.prototype.hasKey= function(key){
 let aux= this.hash(key);
 return this.buckets[aux].hasOwnProperty(key);
}



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
