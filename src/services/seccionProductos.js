import { mostrarPantalla } from "../script.js";
import { ocultarPantalla } from "../script.js";
import { cambiarImgGrande } from "./pantallaProducto.js";
import { averiguarSectionActual } from "../script.js";

export class Producto{
    constructor(data){
        this.nombre = data[0];
		this.imagen1 = data[1];
		this.imagen2 = data[2]
		this.descripcion = data[3];
		this.precio = data[4];
		this.stock = data[5];
		this.marca = data[6];
		this.categoria = data[7];
    }
}

export class seccionProductos{
    constructor(Producto, cuerpoProductos){
        this.product = document.createElement("div");
        this.product.classList.add("product");
        this.imageDiv = document.createElement("div");
        this.imageDiv.classList.add("imageDiv");
        this.image1 = document.createElement("img");
        this.image1.classList.add("imgProduct");
        this.image2 = document.createElement("img");
        this.image2.classList.add("img2");
        this.name = document.createElement("p");
        this.name.classList.add("name");
        this.price = document.createElement("p");
        this.price.classList.add("price");

        this.description = document.createElement("p");
        this.description.classList.add("descripcionProducto");
        this.description.innerHTML = Producto.descripcion;
        this.stockaso = document.createElement("p");
        this.stockaso.classList.add("stock");
        this.stockaso.innerHTML = Producto.stock;

        this.product.appendChild(this.imageDiv);
        this.imageDiv.appendChild(this.image1);
        this.product.appendChild(this.name);
        this.product.appendChild(this.price);
        cuerpoProductos.appendChild(this.product);

        this.image1.src = Producto.imagen1;
        this.image2.src = Producto.imagen2;
        this.name.innerHTML = Producto.nombre;
        this.price.innerHTML = "$" + Producto.precio;

        this.mostrarProducto();

    }

    mostrarProducto(){

        this.product.addEventListener("click", ()=>{ 

            const pantallaProducto = document.querySelector(".pantallaProducto");
            const numStock = this.stockaso.innerHTML;
            agregarContenidoProducto(this.image1.src, this.image2.src, this.name.innerHTML, this.description.innerHTML, this.stockaso.innerHTML, this.price.innerHTML);
            
            const pantallaActual = averiguarSectionActual();
            
            ocultarPantalla(pantallaActual, false);
            mostrarPantalla(pantallaProducto, true);
            
            const imagenesDemo = document.querySelectorAll(".imgDemo");
            cambiarImgGrande(imagenesDemo);

            
            cambiarCantidadProducto(numStock);
            volverPantallaAtras(pantallaActual);
            
        });

    }
    
}



function agregarContenidoProducto(imagen1, imagen2, nombre, descripcion, stock, precio){
    const imgGrande = document.querySelector(".imgGrande");
    const img1 = document.querySelector(".img1");
    const img2 = document.querySelector(".img2");
    const nombreProducto = document.querySelector(".nombreProducto");
    const descripcionProducto = document.querySelector(".descripcionProducto");
    const stockProducto = document.querySelector(".stockProducto");
    const precioProducto = document.querySelector(".precioProducto");

    imgGrande.src = imagen1;
    img1.src = imagen1;
    img2.src = imagen2;
    nombreProducto.innerHTML = nombre;
    descripcionProducto.innerHTML = descripcion;
    stockProducto.innerHTML = "stock disponible: "+ stock + " u";
    precioProducto.innerHTML = precio;
}

let removeEventListeners;

function volverPantallaAtras(pantallaAnterior){
    const pantallaProducto = document.querySelector(".pantallaProducto");
    const btnVolver = document.querySelector(".btnVolver");
    const cantidadProducto = document.querySelector(".textCantidadProducto");

    cantidadProducto.innerHTML = 1;

    function callBackEvento (){
        ocultarPantalla(pantallaProducto, true);
        mostrarPantalla(pantallaAnterior, false);
    
        btnVolver.removeEventListener("click", callBackEvento);
        removeEventListeners();
    }

    btnVolver.addEventListener("click", callBackEvento);
    
}



function cambiarCantidadProducto(numStock){

    const iconoMas = document.querySelector(".iconoMas");
    const iconoMenos = document.querySelector(".iconoMenos");

    function sumarLogica () {
        const cantidadProducto = document.querySelector(".textCantidadProducto");
        if(cantidadProducto.innerHTML<numStock){
            let numActual = parseInt(cantidadProducto.innerHTML);    
            let numFinal = numActual + 1;
    
            cantidadProducto.innerHTML = numFinal;
        }
    }
    
    function restarLogica() {
        const cantidadProducto = document.querySelector(".textCantidadProducto");
    
        if(cantidadProducto.innerHTML > 1){
            cantidadProducto.innerHTML--;
        }
    
    }

    function addEventListeners(){
        // const iconoMas = document.querySelector(".iconoMas");
        // const iconoMenos = document.querySelector(".iconoMenos");
        iconoMas.addEventListener("click", sumarLogica);
        iconoMenos.addEventListener("click", restarLogica);
    }
    
    removeEventListeners = function(){
        // const iconoMas = document.querySelector(".iconoMas");
        // const iconoMenos = document.querySelector(".iconoMenos");
        iconoMas.removeEventListener("click", sumarLogica);
        iconoMenos.removeEventListener("click", restarLogica);
    }
    

    addEventListeners();

    // Agregar nuevos eventos
    // iconoMas.addEventListener("click", callBackMas.bind(null, numStock));
}


