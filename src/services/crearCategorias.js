import { seccionProductos } from "./seccionProductos.js";
import { crearProductos } from "./crearProductos.js";

export function crearCategorias(datos){
    const cuerpoProductos = document.querySelector(".pantallaPrincipal");
    const categorias = obtenerCategorias(datos);
    // const copiaDatos = datos;

    //aca va la logica para mostrar los productos segun un filtro específico

    categorias.forEach(categoria => {
        // Filtra los productos por la categoría actual
        const productosCategoria = datos.filter(propiedad => propiedad[7].toLowerCase() === categoria).slice(0, 5);

        // Un contenedor para la categoría
        const categoriaContainer = document.createElement("div");
        categoriaContainer.classList.add("categoriaContainer");

        // Un contenedor para el titulo y el boton de ver todos los productos
        const categoriaProductosContainer = document.createElement("div");
        categoriaProductosContainer.classList.add("categoriaProductosContainer");

        // Un título para la categoría
        const nombreCategoria = document.createElement("h2");
        nombreCategoria.textContent = categoria;

        // Un boton para ver los productos de la categoria específica
        const btnVerProductos = document.createElement("button");
        btnVerProductos.setAttribute("type", "button");
        btnVerProductos.classList.add("btnVerProductos");
        btnVerProductos.innerHTML = "Ver Todo";

        // el icono de la flecha que va dentro del boton anterior
        const iconoFlecha = document.createElement("i");
        iconoFlecha.classList.add("fa-solid","fa-arrow-right","iconoFlecha");

        btnVerProductos.appendChild(iconoFlecha);

        // Un contenedor para la hilera de productos, dentro del div de categoria
        const productosContainer = document.createElement("div");
        productosContainer.classList.add("productosContainer");

        // Agrega el título al contenedor de la categoría
        categoriaProductosContainer.appendChild(nombreCategoria);
        categoriaProductosContainer.appendChild(btnVerProductos);

        // llama a la funcion para crear los distintos productos
        crearProductos(productosCategoria, productosContainer);
        
        //agrega los productos al contenedor de categoria específica
        categoriaContainer.appendChild(categoriaProductosContainer);
        categoriaContainer.appendChild(productosContainer);
        
        // Agrega el contenedor de la categoría al contenido principal
        cuerpoProductos.appendChild(categoriaContainer);
      });

}



export function obtenerCategorias(productos){
    return  [... new Set(productos.map(producto => producto[7].toLowerCase()))];
}


