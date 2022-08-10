String.prototype.repeatify = function(numero){
    if(numero<0){
        return "Error, ingrese número mayor a cero";
    } else if(numero===0){
        return " ";
    }
    var result='';
    while(numero>0){                //se puede plantear con un for tmb
        result+= this;              
        numero-=1;
    }
    return result;
}
console.log("Buenas!".repeatify(3));
