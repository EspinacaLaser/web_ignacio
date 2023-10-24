document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos el elemento de rango y el elemento de muestra del valor
    var rango = document.getElementById("rango");
    var valorMostrado = document.getElementById("valorSeleccionado");

    // Función para actualizar el valor mostrado cuando se cambia el rango
    rango.addEventListener("input", function () {
        valorMostrado.textContent = rango.value;
    });
});