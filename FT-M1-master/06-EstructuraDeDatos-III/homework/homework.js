"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, 
  según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, 
  hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right= null;
  this.left= null;
}

BinarySearchTree.prototype.size= function(){
  if (this.right=== null && this.left=== null) return 1;
  if (this.left !== null && this.right=== null) return 1 + this.left.size();
  if (this.right !== null && this.left === null) return 1 + this.right.size();
  if (this.left !==null && this.right !== null) return 1 + this.right.size() + this.left.size();
}

BinarySearchTree.prototype.insert= function(value){

if (value > this.value){
  if (this.right=== null){ 
    this.right= new BinarySearchTree(value);
  }
  if (this.right!== null){
    this.right.insert(value);
  }
}
if (value < this.value){
  if(this.left===null){
    this.left= new BinarySearchTree(value);
  } else{
    this.left.insert(value);
  }
}
}

BinarySearchTree.prototype.contains= function(value){
  if(this.value===value) return true;
  if(value > this.value){
    if(this.right=== null) return false;
    else return this.right.contains(value);
    }
  
  if (value < this.value){
    if(this.left=== null) return false;
    else return this.left.contains(value);
  }

  }

  BinarySearchTree.prototype.depthFirstForEach= function(cb, typeOrder){
    if (typeOrder=== 'pre-order'){     //root - izq - der
    cb(this.value);
    if(this.left !== null)  this.left.depthFirstForEach(cb, typeOrder);
    if(this.right !== null) this.right.depthFirstForEach(cb, typeOrder);
    } 

    else if (typeOrder==='post-order'){   //izq - der - root 
      if (this.left !== null) this.left.depthFirstForEach(cb, typeOrder);
      if (this.right !== null) this.right.depthFirstForEach(cb, typeOrder);
      cb (this.value);
    } 
    else { // typeOrder= 'in-order'   --> izq - root - der
      if (this.left !== null) this.left.depthFirstForEach(cb, typeOrder);
      cb (this.value);
      if (this.right !== null) this.right.depthFirstForEach(cb, typeOrder);
    }
  }

  BinarySearchTree.prototype.breadthFirstForEach= function(cb, array=[]){   // en el array que paso como parámetro vacío voy a ir guardando y cambiando los arboles 

    if (this.left !== null){     //recorre de izq a derecha
      array.push(this.left);
    }
    if (this.right !== null){
      array.push(this.right);
    }

    cb (this.value);

    if (array.length > 0){
      array.shift().breadthFirstForEach(cb, array);  //acá mi array ya está modificado con el shift, le saqué el primer valor
    }
  }

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
