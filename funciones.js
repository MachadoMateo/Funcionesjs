// declaramos las funciones
/*function operacion(n1,n2, signo) {
    if(signo == "+"){
        return n1 + n2
    }else if(signo == "-"){
        return n1 - n2;
    }else if(signo == "*"){
        return n1 * n2;
    }else if(signo == "/"){
        return n1 / n2;
    }else{
        return "El signo  no es valido"
    }
}
var num1 = parseInt(prompt("Digite un numero"))
var num2 = parseInt(prompt("Digite otro numero"))
var s = prompt("Digite el signo de la operacion")
//ejecutar la funcion
var resultado = operacion(num1,num2, s);
alert("la operacion  "+num1+" " +s+" " +num2+" es "+resultado)
*/


// declarar funcion anonima
/*(function(){
    alert("Hola guapa");
})();
*/

function saludar(nombre){
    document.write("hola "+nombre+"<br>");
}
function pedirNombre(numeroNombre){
    for(var x = 1; x <= numeroNombre; x++){
        var nom = prompt("digite su nombre");
        saludar(nom);
    }
}
var nombres = parseInt(prompt("Digite cantidad de nombres "))
pedirNombre(nombres)
