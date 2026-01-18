//---------------------------------------------
// SIMULADOR CARRITO DE COMPRAS
//---------------------------------------------

const articulos = [
    { id: 1, nombre: "Camisa", precio: 200 },
    { id: 2, nombre: "Pantalones", precio: 400 },
    { id: 3, nombre: "Zapatos", precio: 800 },
    { id: 4, nombre: "Sombrero", precio: 300 }
];

let carrito = [];
let seguircomprando = true;

function mostrarArticulos() {
    let lista = "Artículos disponibles:\n";

    for (let articulo of articulos) {
        lista += `${articulo.id}. ${articulo.nombre} - $${articulo.precio}\n`;
    }
    return lista;
}

function agregarAlCarrito(id) {
    let encontrado = false;

    for (let articulo of articulos) {
        if (articulo.id === id) {
            carrito.push(articulo);
            encontrado = true;
            return `${articulo.nombre} ha sido agregado.`;
        }
    }
    if (!encontrado) {
        return "Artículo no encontrado.";
    }
}

function calcularTotal(carrito) {
    let total = 0;
    for (let articulo of carrito) {
        total += articulo.precio;
    }
    return total;
}

while (seguircomprando) {
    let decision = prompt("¿Querés agregar un artículo al carrito? (si/no)").toLowerCase();
    if (decision === "si") {
        alert(mostrarArticulos());
        let idElegido = prompt("Ingresá el numero de articulo que querés:");
        let id = Number(idElegido);
        let resultado = agregarAlCarrito(id);
    }
    else if (decision === "no") {
        seguircomprando = false;
    }
}

alert(resultado);
alert("Total a pagar: $" + calcularTotal(carrito));
