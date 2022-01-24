import { stock } from "../variables/stock.js";

let inicio = 0;  // En esta variable llevamos la cuenta para la posición inicial del stock a mostrar
let cantidadVistas = 16;  // En esta variable guardamos la cantidad de productos a mostrar por pággina

function avanzarPagina() {
    inicio += cantidadVistas;
    mostrarStock();
}

function retrocederPagina() {
    inicio -= cantidadVistas;
    mostrarStock();
}

function controlarActivacionBotones() {
    document.querySelectorAll('.btnLess, .btnMore').forEach(item => item.disabled = false);
    if (inicio == 0) {
        document.querySelectorAll('.btnLess').forEach(item => item.disabled = true);
    } else if (inicio + cantidadVistas >= stock.length) {
        document.querySelectorAll('.btnMore').forEach(item => item.disabled = true);
    }
}

export { inicio, cantidadVistas, avanzarPagina, retrocederPagina, controlarActivacionBotones };