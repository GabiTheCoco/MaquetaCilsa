import { obtenerCategorias } from "./crearCategorias.js";
import { crearProductos } from "./crearProductos.js";
import { productos } from "./data.js";
import { ocultarPantalla } from "../script.js";
import { mostrarPantalla } from "../script.js";


export function crearSeccionCategoria (datos){
    const botonVerTodo = document.querySelectorAll(".btnVerProductos");
    const seccionProductosCategoria = document.querySelector(".productosContainerCategoria");
    const pantallaPrincipal = document.querySelector(".pantallaPrincipal");
    const pantallaCategoria = document.querySelector(".pantallaCategoria");

    let productosCategoria = [];
    console.log(productosCategoria);
    
    const btnVolver = document.querySelector(".volverDeCategoria");

    console.log(btnVolver);

    btnVolver.addEventListener("click", callBackEvento);

    function callBackEvento (){
        //limpia el arreglo de productos al volver
        ocultarPantalla(pantallaCategoria, false);
        mostrarPantalla(pantallaPrincipal, false);
        console.log("me como el pedazo");        
        productosCategoria = [];
        console.log(productosCategoria);
    }

    botonVerTodo.forEach((boton) => {
        boton.addEventListener("click", () => {
            const contenedor = boton.closest(".categoriaProductosContainer");
            const tituloCategoria = contenedor.querySelector("h2").innerHTML;
            console.log(tituloCategoria);
            const titulito = document.querySelector(".tituloCategoria");
            productosCategoria = [];
            //selecciona todos los productos de la categoria en el arreglo de datos
            productosCategoria = datos.filter(propiedad => propiedad[7].toLowerCase() === tituloCategoria);
            console.log(productosCategoria);
            crearProductos(productosCategoria, seccionProductosCategoria);
            titulito.innerHTML = tituloCategoria;            
            
            ocultarPantalla(pantallaPrincipal, false);
            mostrarPantalla(pantallaCategoria, false);
        })
    })
    
}

export function crearElementosCategoria(pantalla){
    
    const pantallaCategoria = document.createElement("section");
    pantallaCategoria.classList.add("pantallaCategoria");
    pantallaCategoria.classList.add("oculto");
    
    const categoriaFiltrosContainer = document.createElement("div");
    categoriaFiltrosContainer.classList.add("categoriaFiltrosContainer");
    
    const btnVolver = document.createElement("button");
    btnVolver.classList.add("btnVolver", "volverDeCategoria");
    const textoBtnVolver = document.createElement("span");
    textoBtnVolver.classList.add("textoBtnVolver");
    textoBtnVolver.innerHTML = "Volver";
    const iconoFlecha = document.createElement("i");
    iconoFlecha.classList.add("fa-solid", "fa-arrow-right", "fa-rotate-180", "iconoFlecha");
    
    btnVolver.appendChild(iconoFlecha);
    btnVolver.appendChild(textoBtnVolver);
    
    const tituloCategoria = document.createElement("h2");
    tituloCategoria.classList.add("tituloCategoria");
    
    const filtros = document.createElement("select");
    filtros.classList.add("filtros");
    
    const optionDefecto = document.createElement("option");
    optionDefecto.innerHTML = "Ordenar por: ";
    optionDefecto.setAttribute("selected", "");
    
    const optionMenorPrecio = document.createElement("option");
    optionMenorPrecio.innerHTML = "Menor Precio";
    optionMenorPrecio.value = "menor precio";
    
    const optionMayorPrecio = document.createElement("option");
    optionMayorPrecio.innerHTML = "Mayor Precio"
    optionMayorPrecio.value = "mayor precio";
    
    const productosContainer = document.createElement("div");
    productosContainer.classList.add("productosContainerCategoria");
    
    filtros.appendChild(optionDefecto);
    filtros.appendChild(optionMenorPrecio);
    filtros.appendChild(optionMayorPrecio);
    
    categoriaFiltrosContainer.appendChild(btnVolver);
    categoriaFiltrosContainer.appendChild(tituloCategoria);
    categoriaFiltrosContainer.appendChild(filtros);
    
    pantallaCategoria.appendChild(categoriaFiltrosContainer);
    pantallaCategoria.appendChild(productosContainer);
    
    pantalla.appendChild(pantallaCategoria);
    
}

