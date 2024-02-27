document.addEventListener("DOMContentLoaded", function () {
    const buttonConfirmar = document.querySelector(".button-confirmar");
    buttonConfirmar.addEventListener("click", validarCampos);

    function validarCampos() {
        const nombre = document.getElementById("Nombre").value;
        const direccion = document.getElementById("Direccion").value;
        const precio = document.getElementById("Precio").value;
        const fechaInicio = document.getElementById("Fecha inicio").value;
        const fechaFinal = document.getElementById("Fecha final").value;

        // Validar que los campos no estén vacíos
        if (!nombre || !direccion || !precio || !fechaInicio || !fechaFinal) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        // Validar que el precio solo contenga números
        if (!/^\d+$/.test(precio)) {
            alert("Por favor, ingrese solo números para el precio.");
            return;
        }

        // Obtener la fecha actual
        const fechaActual = new Date();

        // Convertir las fechas a objetos de tipo Date
        const fechaInicioDate = new Date(fechaInicio);
        const fechaFinalDate = new Date(fechaFinal);

        // Validar que las fechas no sean anteriores a la actual
        if (fechaInicioDate < fechaActual || fechaFinalDate < fechaActual) {
            alert("Las fechas no pueden ser anteriores a la actual.");
            return;
        }

        // Validar que la fecha inicial no sea superior a la fecha final
        if (fechaInicioDate > fechaFinalDate) {
            alert("La fecha de inicio no puede ser superior a la fecha final.");
            return;
        }

        // Validar que la fecha final no sea inferior a la fecha inicial
        if (fechaFinalDate < fechaInicioDate) {
            alert("La fecha final no puede ser inferior a la fecha de inicio.");
            return;
        }

        // Si todas las validaciones son exitosas, puedes proceder con la acción deseada
        // Por ejemplo, enviar el formulario o realizar alguna otra operación
        alert("Campos validados con éxito. Puedes proceder con la acción deseada.");
    }
});
