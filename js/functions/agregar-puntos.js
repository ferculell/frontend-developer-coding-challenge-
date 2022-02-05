import { usuarioActual } from "../variables/globales.js"

function agregarPuntos() {
    let valorSeleccionado = Number(document.querySelector('input[name="agregar"]:checked').value);
    usuarioActual.agregarPuntos(valorSeleccionado);
    alert(`Ahora tenés $${usuarioActual.puntos} disponibles.`);
    actualizarPuntos();
    mostrarStock();
}

function actualizarPuntos() {
    document.querySelector('#aero-coins p').innerText = usuarioActual.puntos;
}

export { agregarPuntos, actualizarPuntos };