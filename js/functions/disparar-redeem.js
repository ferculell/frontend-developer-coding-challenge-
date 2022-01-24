import { usuarioActual } from "../variables/globales.js"

function dispararRedeem(valor) {
    usuarioActual.redeem(valor);
    alert(`Te quedan $${usuarioActual.puntos} disponibles.`);
    mostrarStock();
}

export { dispararRedeem };