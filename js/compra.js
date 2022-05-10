
var cantidad = 500;


function tickets(cantidad){
    if (cantidad >= 1) {
        let total = cantidad * 200;
        console.log(total);
    }

}

tickets(cantidad);



function seleccionarCategoria(categoria, callback) {
    if (categoria === 'Estudiante') {
        console.log ("descuento 80 %");
        tickets(cantidad) * 0.8;
    }
}

seleccionarCategoria('Estudiante');