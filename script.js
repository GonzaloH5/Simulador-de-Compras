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

function mostrarArticulos() {
    let lista = "Artículos disponibles:\n";

    for (let articulo of articulos) {
        lista += `${articulo.id}. ${articulo.nombre} - $${articulo.precio}\n`;
    }
    return lista;
}

function calcularTotal(carrito) {
    let total = 0;
    for (let articulo of carrito) {
        total += articulo.precio;
    }
    return total;
}