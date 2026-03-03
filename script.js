//---------------------------------------------
// SIMULADOR CARRITO DE COMPRAS
//---------------------------------------------

// --------------------------------------------
// DOM
// --------------------------------------------
const contenedorArticulos = document.getElementById("lista-articulos");
const contenedorCarrito = document.getElementById("carrito");
const totalSpan = document.getElementById("total");

// ---------------------------------------------
// DATOS
// ---------------------------------------------
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

function calcularTotal(carrito) {
    let total = 0;
    for (let articulo of carrito) {
        total += articulo.precio;
    }
    return total;
}

function renderizarArticulos() {
    articulos.forEach(articulo => {
        const div = document.createElement("div");

        div.innerHTML = `
            <p>${articulo.nombre} - $${articulo.precio}</p>
            <button data-id="${articulo.id}">Agregar</button>
        `;
        contenedorArticulos.appendChild(div);
    });

}
renderizarArticulos();

contenedorArticulos.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
        const id = Number(e.target.getAttribute("data-id"));
        agregarAlCarrito(id);
        actualizarCarrito();
    }
});

function actualizarCarrito() {
    contenedorCarrito.innerHTML = "";
    carrito.forEach(articulo => {

        const p = document.createElement("p");
        p.textContent = `${articulo.nombre} - $${articulo.precio}`;

        contenedorCarrito.appendChild(p);
    });

    totalSpan.textContent = calcularTotal(carrito);
}

function confirmarcompra() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }
    const total = calcularTotal(carrito);
    const confirmar = confirm(`El total es $${total}. ¿Desea confirmar la compra?`);
    if (confirmar) {
        alert("¡Compra confirmada! Gracias por su compra.");
        carrito = [];
        actualizarCarrito();
    } else {
        alert("Compra cancelada.");
    }
}

const btnConfirmar = document.getElementById("btn-confirmar");

if (btnConfirmar) {
    btnConfirmar.addEventListener("click", confirmarcompra);
}
