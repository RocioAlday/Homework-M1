String.prototype.repeatify = function(numero){
    if(numero<0){
        return "Error, ingrese número mayor a cero";
    } else if(numero===0){
        return " ";
    }
    var result='';
    while(numero>0){                //se puede plantear con un for tmb
        result+= this;              // ver otras forma que no sea guardarndo this en una variable
        numero-=1;
    }
    return result;
}
//console.log("Buenas!".repeatify(3));


class Shape {
    constructor(tipo){
    this.type= tipo;
    this.getType= function(){
        return this.type;
    }
    }
}
/*/ OTRA FORMA DE CREAR SHAPE ES DIRECTAMENTE COMO UN OBJETO:
var Shape= {
    type: 'Shape',  
    getType: function(){
        return this.type;
    }
};*/

class Triangle extends Shape {
    constructor(a, b, c){
        super('Triangle');
        this.a=a;
        this.b=b;
        this.c=c;
    }
}
/*/   OTRA FORMA PARA CREAR TRIANGLE ES DIRECTAMENTE EXPRESARLO COMO UNA FUNCION
function Triangle (a, b, c) {   
this.type='Triangle';
this.a=a;
this.b=b;
this.c=c;
} */
//Triangle.prototype= Shape;
//Triangle.prototype.constructor= Triangle;

Triangle.prototype.getPerimeter= function(){
    return this.a + this.b + this.c;
}

var t = new Triangle(1, 2, 3);
console.log (t instanceof Triangle);
// true
console.log(Shape.prototype.isPrototypeOf(t));
// true
 console.log (t.getPerimeter());
// 6
console.log (t.getType());
// "Triangle"


class Circle extends Shape {
    constructor(r){
        super('Circle');
        this.radio=r;
}
getPerimeter(){
    let pi= 3.14;
    return 2*pi*this.radio;
}
}

var c = new Circle(2);
console.log (c instanceof Circle);
// true
console.log(Shape.prototype.isPrototypeOf(c));
// true
console.log (c.getPerimeter());
// 12.566370614359172
console.log (c.getType());
// "Circle"
