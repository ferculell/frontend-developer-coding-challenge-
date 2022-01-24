import Usuario from "../classes/usuario.js";

const usuarioActual = new Usuario('Juana Doe', 1200);
const contenedorStock = document.querySelector('#stock');

export { usuarioActual, contenedorStock };