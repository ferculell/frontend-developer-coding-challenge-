import { usuarioActual } from "../variables/globales.js"
import { actualizarPuntos } from "./agregar-puntos.js";

function dispararRedeem(valor) {
    usuarioActual.redeem(valor);
    alert(`Te quedan $${usuarioActual.puntos} disponibles.`);
    actualizarPuntos();
    mostrarStock();
}

export { dispararRedeem };