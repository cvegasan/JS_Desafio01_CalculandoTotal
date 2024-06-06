// REQUERIMIENTOS
// 1. Agrega el evento de JavaScript que reacciona ante un clic en el elemento HTML que
//    corresponde.
//    (2.5 puntos)
// 2. Aplicar los querySelector() e innerHTML() de manera correcta para modificar los
//    elementos del DOM.
//    (2.5 puntos)
// 3. Implementa la lógica para modificar total a pagar en función de la cantidad.
//    (2.5 puntos)
// 4. Hacer funcionar los botones de + y - para aumentar y disminuir la cantidad de
//    productos.
//    (2.5 puntos)

//Declaración de constantes
const precio = 400000; //valor por producto

//Declaración de variables
let precioSpan = document.querySelector(".precio-inicial"); //selector por clase, por id se llama getElementById
precioSpan.innerHTML = precio;

let valortotalSpan = document.querySelector(".valor-total");//selector por clase

let pedido  = 0;
let cantidad= 0;

//Declaración de funciones
function fnActualizaTotal(pedido,precio){
    return pedido * precio;
}
function fnSumarUno() {
    pedido += 1;
    cantidad = document.querySelector(".cantidad");
    cantidad.innerHTML = pedido;
    valortotalSpan.innerHTML = fnActualizaTotal(pedido,precio);
    return 0;
}
function fnRestarUno() {
    if (pedido > 0) {
        pedido -= 1;
    }
    cantidad = document.querySelector(".cantidad");
    cantidad.innerHTML = pedido;
    valortotalSpan.innerHTML = fnActualizaTotal(pedido,precio);
    return 0;
}