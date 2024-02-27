// validacion.js

function validarPago() {
    var numeroTarjeta = document.getElementById('numeroTarjeta').value;
    var fechaCaducidad = document.getElementById('fechaCaducidad').value;
    var cvv = document.getElementById('cvv').value;

    // Validar que el CVV solo contenga números y tenga una longitud máxima de 3
    if (!/^\d{3}$/.test(cvv)) {
        alert('Por favor, introduzca un CVV válido .');
        return false;
    }

    // Validar la fecha de caducidad
    var fechaActual = new Date();
    var fechaCaducidadDate = new Date(fechaCaducidad);

    if (fechaCaducidadDate <= fechaActual) {
        alert('La fecha de caducidad no es válida. Por favor, seleccione una fecha futura.');
        return false;
    }

    if (numeroTarjeta === '' || fechaCaducidad === '' || cvv === '') {
        alert('Por favor, complete todos los campos antes de pagar.');
        return false;
    }

    return true;
}


function formats(ele,e){
    if(ele.value.length<19){
      ele.value= ele.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
      return true;
    }else{
      return false;
    }
  }
  
  function numberValidation(e){
    e.target.value = e.target.value.replace(/[^\d ]/g,'');
    return false;
  }