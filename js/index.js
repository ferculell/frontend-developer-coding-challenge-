import { mostrarStock } from './functions/mostrar-stock.js';
import { mostrarAeropay } from './functions/mostrar-aeropay.js';
import { avanzarPagina, retrocederPagina, controlarActivacionBotones } from "./functions/paginacion.js";
import { dispararRedeem } from "./functions/disparar-redeem.js";
import { agregarPuntos } from "./functions/agregar-puntos.js";


window.mostrarStock = mostrarStock;
window.avanzarPagina = avanzarPagina;
window.retrocederPagina = retrocederPagina;
window.controlarActivacionBotones = controlarActivacionBotones;
window.dispararRedeem = dispararRedeem;
window.agregarPuntos = agregarPuntos;


document.querySelector('#aero-coins').addEventListener('click', mostrarAeropay);