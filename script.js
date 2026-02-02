//---------------------------------------------
// SIMULADOR CARRITO DE COMPRAS
//---------------------------------------------

const articulos = [
    { id: 1, nombre: "Ram 4gb DDR4", precio: 30 },
    { id: 2, nombre: "Ram 8gb DDR4", precio: 60 },
    { id: 3, nombre: "Ram 16gb DDR4", precio: 100 },
    { id: 4, nombre: "GPU RTX 3060", precio: 350 },
    { id: 5, nombre: "Fuente de poder 600W", precio: 70 },
    { id: 6, nombre: "SSD 500gb", precio: 80 },
    { id: 7, nombre: "SSD 1TB", precio: 150 },
    { id: 8, nombre: "HDD 1TB", precio: 50 },
    { id: 9, nombre: "HDD 2TB", precio: 80 },
    { id: 10, nombre: "Placa madre B450", precio: 120 }
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

while (seguircomprando) {
    let decision = prompt("¿Querés agregar un artículo al carrito? (si/no)").toLowerCase();
    if (decision === "si") {
        console.log(mostrarArticulos());
        let idElegido = prompt("Ingresá el numero de articulo que querés:");
        let id = Number(idElegido);
        let resultado = agregarAlCarrito(id);
    }
    else if (decision === "no") {
        seguircomprando = false;
    }
}

function calcularTotal(carrito) {
    let total = 0;
    for (let articulo of carrito) {
        total += articulo.precio;
    }
    return total;
}

alert("Total a pagar: $" + calcularTotal(carrito));
