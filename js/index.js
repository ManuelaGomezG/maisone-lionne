

//let nombreIngresado = prompt("Ingresa tu nombre");

//let correoIngresado = prompt("Ingresa tu correo");
//console.log(nombreIngresado + " tu correo electronico es: " + correoIngresado)

let producto1 = 5000;
let producto2 = 1500;
let producto3 = 2000;
let producto4 = 3000;
let producto5 = 3000;
let producto6 = 2000;
let producto7 = 2000;
let producto8 = 1800;
let producto9 = 1500;

let producto = 0;
let suma = 0;
let cantidad = 0;
let multiplicar = 0;
let total = 0;


 function calcularTotal (precio, cantidad){
    return precio * cantidad;
 }


producto = parseInt(prompt("¿Que producto deseas comprar: 1, 2, 3, 4, 5, 6, 7, 8 o 9?"))

switch (producto){
    case 1:
       cantidad = parseInt(prompt("Cuantos productos deseas ordenar?"))
       total = calcularTotal (producto1, cantidad);
       break;
       case 2:
       cantidad = parseInt(prompt("Cuantos productos deseas ordenar?"))
       total = calcularTotal (producto2, cantidad);
       break;
       case 3:
       cantidad = parseInt(prompt("Cuantos productos deseas ordenar?"))
       total = calcularTotal (producto3, cantidad);
       break;
       case 4:
       cantidad = parseInt(prompt("Cuantos productos deseas ordenar?"))
       total = calcularTotal (producto4, cantidad);
       break;
       case 5:
       cantidad = parseInt(prompt("Cuantos productos deseas ordenar?"))
       total = calcularTotal (producto5, cantidad);
       break;
       case 6:
       cantidad = parseInt(prompt("Cuantos productos deseas ordenar?"))
       total = calcularTotal (producto6, cantidad);
       break;
       case 7:
       cantidad = parseInt(prompt("Cuantos productos deseas ordenar?"))
       total = calcularTotal (producto7, cantidad);
       break;
       case 8:
       cantidad = parseInt(prompt("Cuantos productos deseas ordenar?"))
       total = calcularTotal (producto8, cantidad);
       break;
       case 9:
       cantidad = parseInt(prompt("Cuantos productos deseas ordenar?"))
       total = calcularTotal (producto9, cantidad);
       break;
       default:
         alert ("Producto invalido, por favor ingresa un numero del 1 al 9");
         
       }

       if (total > 0){
         console.log("Su total es de: $ " + total)
      } else {
         console.log("No se selecciono ningun producto valido")
      }





































