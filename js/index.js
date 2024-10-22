//let nombreIngresado = prompt("Ingresa tu nombre");
//let correoIngresado = prompt("Ingresa tu correo");
//console.log(nombreIngresado + " tu correo electronico es: " + correoIngresado)

/*
let producto1 = 5000;
let producto2 = 1500;
let producto3 = 2000;
let producto4 = 3000;
let producto5 = 3000;
let producto6 = 2000;
let producto7 = 2000;
let producto8 = 1800;
let producto9 = 1500;
let pagoTotal = 0
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
       cantidad = parseInt(prompt("Cuantos productos deseas ordenar?"));
       total = calcularTotal (producto1, cantidad);
       break;
       case 2:
       cantidad = parseInt(prompt("Cuantos productos deseas ordenar?"));
       total = calcularTotal (producto2, cantidad);
       break;
       case 3:
       cantidad = parseInt(prompt("Cuantos productos deseas ordenar?"));
       total = calcularTotal (producto3, cantidad);
       break;
       case 4:
       cantidad = parseInt(prompt("Cuantos productos deseas ordenar?"));
       total = calcularTotal (producto4, cantidad);
       break;
       case 5:
       cantidad = parseInt(prompt("Cuantos productos deseas ordenar?"));
       total = calcularTotal (producto5, cantidad);
       break;
       case 6:
       cantidad = parseInt(prompt("Cuantos productos deseas ordenar?"));
       total = calcularTotal (producto6, cantidad);
       break;
       case 7:
       cantidad = parseInt(prompt("Cuantos productos deseas ordenar?"));
       total = calcularTotal (producto7, cantidad);
       break;
       case 8:
       cantidad = parseInt(prompt("Cuantos productos deseas ordenar?"));
       total = calcularTotal (producto8, cantidad);
       break;
       case 9:
       cantidad = parseInt(prompt("Cuantos productos deseas ordenar?"));
       total = calcularTotal (producto9, cantidad);
       break;
       default:
         alert ("Producto invalido, por favor ingresa un numero del 1 al 9"); 
       }

       if (total > 0){
         console.log("Su total es de: $ " + total);
      } else {
         console.log("No se selecciono ningun producto valido");
}

--

function calcularTotal(precio, cantidad) {
  return precio * cantidad;
}

const PRODUCTOS = parseInt(prompt("¿Qué producto deseas comprar (1 al 9)?"));

if (producto >= 1 && producto <= 9) {
  let cantidad = parseInt(prompt("¿Cuántos productos deseas ordenar?"));

  if (cantidad > 0) {
    let total = calcularTotal(precios[producto - 1], cantidad);

    console.log("Su total es de: $" + total);
  } else {
    console.log("Cantidad inválida.");
  }
} else {
  console.log("Producto inválido. Ingresa un número del 1 al 9.");
}




*/

const PRODUCTOS = [
  {
    producto: 1,
    nombre: Proyecto Integral,
    color: No Aplica,
    precio: 5000,
  },
  {
    producto: 2,
    nombre: Asesoria,
    color: No Aplica,
    precio: 1500,
  },
  {
    producto: 3,
    nombre: Florero Blues,
    color: azul,
    precio: 2000,
  },
  {
    producto: 4,
    nombre: Jarron Jade,
    color: verde,
    precio: 3000,
  },
  {
    producto: 5,
    nombre: Jarron Shell,
    color: blanco,
    precio: 3000,
  },
  {
    producto: 6,
    nombre: Jarron Twin,
    color: transparente,
    precio: 2000,
  },
  {
    producto: 7,
    nombre: Lampara Bliss,
    color: amarilla,
    precio: 2000,
  },
  {
    producto: 8,
    nombre: Lampara Klimpt,
    color: dorada,
    precio: 1800,
  },
  {
    producto: 9,
    nombre: Lampara Old Times,
    color: negra,
    precio: 1500,
  },
];

let calcularTotal = (precio, cantidad) => precio * cantidad;

let carritoCompra = () => {
  let totalFinal = 0;
  let continuar = true;

  while (continuar) {
    const producto = parseInt(prompt("¿Que producto deseas agregar al carrito? Ingresa un numero del 1 al 9?"));

    if (producto >= 1 && producto <= 9) {
      let cantidad = parseInt(prompt("¿Cuantos productos deseas ordenar?"));

      if (cantidad > 0) {
        let seleccionado = PRODUCTOS.find(p => p.producto === producto);
        let totalProducto = calcularTotal(seleccionado.precio, cantidad);
        totalFinal += totalProducto;

        console.log(`El producto seleccionado es : ${seleccionado.nombre} - Cantidad: ${cantidad} - Total: $${totalProducto}`);
      } else {
        console.log("Cantidad no valida.");
      }
    } else {
      console.log("Producto invalido, por favor ingresa un numero del 1 al 9.");
    }

    let continuarCompra = prompt("¿Quieres añadir mas productos? (si/no)").toLowerCase();
    if (continuarCompra === 'si') {
      continuar = true;
    } else {
      continuar = false;
    }
  }

  console.log(`El total a pagar es de : $ ${totalFinal}`);
};

carritoCompra();