document.addEventListener('DOMContentLoaded', function(){
    const botonMenu = document.getElementById('boton-menu');
    const menuDesplegable = document.getElementById('menu-desplegable');

    botonMenu.addEventListener('click', function(){
        if (menuDesplegable.classList.contains('show')){
            menuDesplegable.classList.remove('show');
        } else {
            menuDesplegable.classList.add('show');
        }
    });

    const contenedorItemsCarrito = document.getElementById('contenedor-items-carrito');
    const subtotalCarrito = document.getElementById('subtotal-carrito');

    // función para mostrar el carrito en pantalla
    function mostrarCarrito() {
        // limpiar contenido de carrito
        contenedorItemsCarrito.innerHTML = '';

        // obtener el carrito del almacenamiento local
        const carrito = JSON.parse(localStorage.getItem('carrito'));

        // mostrar cada elemento del carrito
        carrito.forEach(function(item){
            const elementoCarrito = document.createElement ('li');
            elementoCarrito.textContent = `${item.nombre} - €${item.precio}}`;
            contenedorItemsCarrito.appendChild(elementoCarrito);
        });

        // calcular y mostrar el subtotal del carrito
        const subtotal = carrito.reduce((acc, item) => acc + item.precio, 0);
        subtotalCarrito.textContent = `Subtotal: €${subtotal.toFixed(2)}`;     
    }  
    
    // mostrar el carrito al cargar la página
    mostrarCarrito();

    const contenedorMenu = document.getElementById('contenedor-menu');

    function mostrarMenu() {
        // limpiar contenido del menú
        contenedorMenu.innerHTML = '';

        // mostrar cada producto en el menú
        menu.forEach(function(producto){
            const elementoProducto = document.createElement('div');
            elementoProducto.classList.add('cold-md-4');
            elementoProducto.innerHTML = `
                <div class="producto">
                <h2 class="nombre-producto">${producto.nombre}</h2>
                <p class="ingredientes-producto">${producto.ingredientes}</p>
                <p class="precio-producto">€${producto.precio}</p>
                <button class="boton-agregar-carrito" data-id-producto="${producto.id}">Agregar al Carrito</button>    
                </div>
            `;
            contenedorMenu.appendChild(elementoProducto);
        });
    }

    // mostrar el menú al cargar la página
    mostrarMenu();

    // manejar clic en botones "Agregar al carrito"
    contenedorMenu.addEventListener('click', function(evento) {
        if (evento.target.classList.contains('boton-agregar-carrito')) {
            const idProducto = evento.target.getAttribute('data-id-producto');
            const producto = menu.find(p => p.id == idProducto);

            // Obtener el carrito de compras del almacenamiento local
            const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

            // Agregar el producto al carrito de compras
            carrito.push(producto);

            // Guardar el carrito actualizado en el almacenamiento local
            localStorage.setItem('carrito', JSON.stringify(carrito));

            // Mostrar el carrito actualizado en pantalla
            mostrarCarrito();
        }
    });
});


