import { usuarioActual } from "../variables/globales.js"

function agregarPuntos() {
    let valorSeleccionado = Number(document.querySelector('input[name="agregar"]:checked').value);
    usuarioActual.agregarPuntos(valorSeleccionado);
    alert(`Ahora tenés $${usuarioActual.puntos} disponibles.`);
    mostrarStock();
}

export { agregarPuntos };