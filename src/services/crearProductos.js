import { Producto } from "./seccionProductos.js";
import { seccionProductos } from "./seccionProductos.js";


export function crearProductos(productosCategoria, productosContainer){
    productosContainer.innerHTML = "";
        
    productosCategoria.forEach( p => {
        let producto = new Producto(p);
        let productoHtml = new seccionProductos(producto, productosContainer);
    })
}