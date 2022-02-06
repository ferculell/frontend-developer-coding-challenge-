export function mostrarAeropay() {
    let aeropay = document.querySelector("#aeropay");
    console.log(aeropay.style.display);
    if (aeropay.style.display === "none" || aeropay.style.display === "") {
        aeropay.style.display = "flex";
    } else {
        aeropay.style.display = "none";
    }
    console.log(aeropay.style.display);
}