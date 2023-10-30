document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("mi-formulario");
    const botonBorrar = document.getElementById("boton-borrar");
  
    botonBorrar.addEventListener("click", function (event) {
      event.preventDefault();
  
      formulario.reset(); 
    });
  });