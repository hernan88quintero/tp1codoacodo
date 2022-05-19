// llamando a la función a través del evento "click"

document.getElementById("resumenBtn").addEventListener("click", () => captar());

function captar(){
      let nombre = document.getElementById('nombre').value;
      let apellido = document.getElementById('apellido').value;
      let correo = document.getElementById('correo').value;
      let cantidad = parseInt(document.getElementById('cantidad').value);
      let categoria = parseInt(document.getElementById('categoria').value);
      let precio = 200;

      //Función que capta la cantidad de tickets a comprar

      function total(cantidad){
            if (cantidad >= 1) {
                let total = cantidad * precio;
                return(total);
            }else{
                  alert("Por favor Ingrese una cantidad válida de tickets.")
            }
        };

      //Función que capta y procesa el descuento seleccionado

      function descuento(categoria){
            if(categoria === 1){
                  let estudiante = total(cantidad) * 0.80;
                  return total(cantidad) - estudiante;
            }else if(categoria === 2){
                  let trainee = total(cantidad) * 0.50;
                  return total(cantidad) - trainee;
            }else if(categoria === 3){
                  let junior = total(cantidad) * 0.15;
                  return total(cantidad) - junior;
            }else{
                  alert("Por favor seleccione una categoría");
            }
      };

      // llamado de la función e impresión del resultado en pantalla
      
      var mostrarEnPantalla = document.getElementById('mostrar');
      mostrarEnPantalla.innerHTML = '$ ' + descuento(categoria);

      // llamado de los valores e impresión del resultado en consola

      // console.log("Nombre: " + nombre + " Apellido: " + apellido + " Correo: " + correo + " Cantidad: " + cantidad + " Categoria: " + categoria + " total: " + total(cantidad) + " total con descuento: " + descuento(categoria));

}