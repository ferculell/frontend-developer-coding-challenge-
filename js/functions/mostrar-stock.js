import { usuarioActual, contenedorStock } from "../variables/globales.js";
import { stock } from "../variables/stock.js";
import {  inicio, cantidadVistas, controlarActivacionBotones } from "./paginacion.js";

function mostrarStock() {
    const contenedorVistas = document.createElement('div');
    contenedorVistas.setAttribute('class', 'row');
    // En este ciclo generamos una fila de tres tarjetas de productos
    for (let i = inicio; i < inicio + cantidadVistas; i++) {
        let tarjeta = document.createElement('div');
        tarjeta.setAttribute('class', 'col-3');
        if (stock[i]) {
            tarjeta.innerHTML = `
            <div class="card">
                <img class="card-img-top" src=${stock[i].imagen} alt="Card image" style="width:100%">
                <div class="card-body">
                    <h4 class="card-title">${stock[i].nombre}</h4>
                    <p class="card-text">Precio $${stock[i].precio}</p>
                </div>
            </div>
            `;
        } else {
            tarjeta.innerHTML = `
            <img class="card-img-top" src="./img/imagen-producto.jpg" alt="Placeholder" style="width:100%">
            <div class="card-body">
                <h4 class="card-title">No hay más productos</h4>
            </div>
            `;
        }

        if (stock[i]) {
            if (usuarioActual.puntos >= stock[i].precio) {
                tarjeta.innerHTML += `
                <div class="d-grid gap-2">
                    <button 
                        class="btn btn-primary" 
                        onclick="dispararRedeem(${stock[i].precio})"
                    >Comprar</button>
                </div>
                `;
            } else {
                tarjeta.innerHTML += `
                <div class="d-grid gap-2">
                    <button class="btn btn-primary" disabled>Te faltan $${stock[i].precio - usuarioActual.puntos}</button>
                </div>
                `;
            }
        }

        // Enviamos cada tarjeta al contenedor
        contenedorVistas.appendChild(tarjeta);
    }

    // Borramos la vista anterior antes de generar la nueva
    if (contenedorStock.childNodes[0]) {
        contenedorStock.removeChild(contenedorStock.childNodes[0]);
    }

    contenedorStock.appendChild(contenedorVistas);

    controlarActivacionBotones();

}

export { mostrarStock };