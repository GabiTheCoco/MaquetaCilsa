import { crearCategorias } from "./services/crearCategorias.js";
import { productos } from "./services/data.js";
import { crearElementosProducto } from "./services/pantallaProducto.js";
import { crearElementosCategoria, crearSeccionCategoria } from "./services/seccionCategoria.js";

document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");

    crearCategorias(productos);
    crearElementosProducto();
    crearElementosCategoria(main);
    crearSeccionCategoria(productos);
})


export function mostrarPantalla(pantallaNueva, cambioBody){
    const body = document.querySelector("body");

    
    if(cambioBody){
        body.style.height = "100vh";
    }else{
        body.style.height = "100%"
    }        
    pantallaNueva.classList.remove("oculto");

    // console.log(pantalla);
}

export function ocultarPantalla(pantallaActual, cambioBody){
    const body = document.querySelector("body");

    if(cambioBody){
        body.style.height = "100vh";
    }else{
        body.style.height = "100%"
    }
    pantallaActual.classList.add("oculto");
    // console.log(pantalla);

}

export function averiguarSectionActual(){
    const main = document.querySelector("main");

    const listaSections = document.querySelectorAll("section");

    let sectionVisible = null;

    listaSections.forEach((section) => {
        const computedStyle = window.getComputedStyle(section);
        if (computedStyle.display !== 'none') {
            sectionVisible = section;
        }
    });

    return sectionVisible;
}

