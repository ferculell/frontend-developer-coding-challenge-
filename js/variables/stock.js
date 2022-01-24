import { mostrarStock } from '../functions/mostrar-stock.js';

let stock = [];
const urlProductos = './data.json';

fetch(urlProductos)
.then(response => response.json())
.then(data => {
    stock = data;
    mostrarStock(); // Ejecutamos la vista inicial con la primera página de productos
});

export { stock };