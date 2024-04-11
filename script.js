const menu = [
    {
        nombre: 'Arroz',
        ingredientes: 'Arroz, porotos negros y bife',
        precio: 8,
    },
    {
        nombre: 'Lasaña',
        ingredientes: 'lasaña, carne, boloñesa, queso',
        precio: 10,
    },
    {
        nombre: 'Pollo asado con papas fritas',
        ingredientes: 'pollo asado, papas fritas',
        precio: 7,
    },
    {
        nombre: 'Carbonara',
        ingredientes: 'Pasta, carbonara',
        precio: 5,
    },
];
 

// Para buscar platillo aplico una funcion
function buscarPlatillo(nombrePlatillo, presupuesto) {
    const platillosEncontrados = menu.filter(platillo => platillo.nombre.toLowerCase() === nombrePlatillo.toLowerCase() && platillo.precio <= presupuesto);
    
    return platillosEncontrados [0];
}

// solicitar platillo al cliente
const nombrePlatilloCliente = prompt("Ingrese el nombre del platillo que desea buscar:");

// solictar presu al cliente
const presupuestoCliente = parseFloat(prompt("Ingrese su presupuesto:"));

// busqueda del platillo
const platilloBuscado = buscarPlatillo(nombrePlatilloCliente, presupuestoCliente);

// salida del resultado
if (platilloBuscado) {
    alert("¡Encontramos el platillo dentro de su presupuesto!\nNombre: " + platilloBuscado.nombre + "\nPrecio: €" + platilloBuscado.precio);
} else {
    alert("Lo sentimos, no encontramos el platillo dentro de su presupuesto o no está en el menú.");
}


