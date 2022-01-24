export default class Usuario {
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