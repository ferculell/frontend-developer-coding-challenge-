class Producto {
    constructor(id, nombre, imagen, precio) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }
}

class Usuario {
    constructor(nombre, puntos) {
        this.nombre = nombre;
        this.puntos = puntos;
    }

    agregarPuntos(puntos) {
        this.puntos += puntos;
    }
    redeem(valor) {
        this.puntos -= valor;
    }
}



//////////  Creamos el stock trayendo los datos de un JSON  ///////////////////

let stock = [];
const urlProductos = './data.json';

fetch(urlProductos)
.then(response => response.json())
.then(data => {
    stock = data;
    mostrarStock(); // Ejecutamos la vista inicial con la primera página de productos
});



///// Creamos la vista de los productos en stock ///////////

const usuarioActual = new Usuario('Juana Doe', 1200);

let inicio = 0;  // En esta variable llevamos la cuenta para la posición inicial del stock a mostrar
let cantidadVistas = 16;  // En esta variable guardamos la cantidad de productos a mostrar por pággina
const contenedorStock = document.querySelector('#stock');


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

function controlarActivacionBotones() {
    document.querySelectorAll('.btnLess, .btnMore').forEach(item => item.disabled = false);
    if (inicio == 0) {
        document.querySelectorAll('.btnLess').forEach(item => item.disabled = true);
    } else if (inicio + cantidadVistas >= stock.length) {
        document.querySelectorAll('.btnMore').forEach(item => item.disabled = true);
    }
}

function avanzarPagina() {
    inicio += cantidadVistas;
    mostrarStock();
}

function retrocederPagina() {
    inicio -= cantidadVistas;
    mostrarStock();
}

function dispararRedeem(valor) {
    usuarioActual.redeem(valor);
    alert(`Te quedan $${usuarioActual.puntos} disponibles.`);
    mostrarStock();
}