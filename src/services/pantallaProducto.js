
export function crearElementosProducto(){
    const main = document.querySelector("main");

    const sectionProductos = document.createElement("section");
    sectionProductos.classList.add("pantallaProducto", "oculto");

    const BloqueIzquierda = document.createElement("div");
    BloqueIzquierda.classList.add("bloqueIzquierda");

    const btnVolver = document.createElement("button");
    btnVolver.classList.add("btnVolver");
    const textoBtnVolver = document.createElement("span");
    textoBtnVolver.classList.add("textoBtnVolver");
    textoBtnVolver.innerHTML = "Volver";
    const iconoFlecha = document.createElement("i");
    iconoFlecha.classList.add("fa-solid", "fa-arrow-right", "fa-rotate-180", "iconoFlecha");

    btnVolver.appendChild(iconoFlecha);
    btnVolver.appendChild(textoBtnVolver);

    const bloqueImagenes = document.createElement("div");
    bloqueImagenes.classList.add("bloqueImagenes");
    const img1 = document.createElement("img");
    img1.classList.add("img1", "imgDemo", "img-active");
    const img2 = document.createElement("img");
    img2.classList.add("img2", "imgDemo");

    bloqueImagenes.appendChild(img1);
    bloqueImagenes.appendChild(img2);

    BloqueIzquierda.appendChild(btnVolver);
    BloqueIzquierda.appendChild(bloqueImagenes)

    const divImgGrande = document.createElement("div");
    divImgGrande.classList.add("divImgGrande");
    const imgGrande = document.createElement("img");
    imgGrande.classList.add("imgGrande");

    divImgGrande.appendChild(imgGrande);

    const detallesProducto = document.createElement("div");
    detallesProducto.classList.add("detallesProducto");
    const nombreProducto = document.createElement("p");
    nombreProducto.classList.add("nombreProducto");

    const descripcionProducto = document.createElement("p");
    descripcionProducto.classList.add("descripcionProducto");
    
    const infoProducto = document.createElement("div");
    infoProducto.classList.add("infoProducto");

    const divStockCantidad = document.createElement("div");
    divStockCantidad.classList.add("divStockCantidad");
    const stockProducto = document.createElement("p");
    stockProducto.classList.add("stockProducto");

    const cantidadProducto = document.createElement("span");
    cantidadProducto.classList.add("cantidadProducto");
    const  textCantidadProducto = document.createElement("p");
    textCantidadProducto.classList.add("textCantidadProducto");
    textCantidadProducto.innerHTML = 1;
    const iconoMas = document.createElement("i");
    iconoMas.classList.add("fa-solid", "fa-plus", "iconoMas");
    const iconoMenos = document.createElement("i");
    iconoMenos.classList.add("fa-solid", "fa-minus", "iconoMenos");

    cantidadProducto.appendChild(iconoMenos);
    cantidadProducto.appendChild(textCantidadProducto);
    cantidadProducto.appendChild(iconoMas);
    
    const divPrecioCarrito = document.createElement("div")
    divPrecioCarrito.classList.add("divPrecioCarrito");
    const precioProducto = document.createElement("p");
    precioProducto.classList.add("precioProducto");
    const botonCarrito = document.createElement("button");
    botonCarrito.setAttribute("type", "button");
    botonCarrito.classList.add("botonCarrito");
    botonCarrito.innerHTML = "Agregar al carrito"
    const iconoCarrito = document.createElement("i");
    iconoCarrito.classList.add("fa-solid", "fa-cart-shopping", "iconoCarrito");

    botonCarrito.appendChild(iconoCarrito);
    divPrecioCarrito.appendChild(precioProducto);
    divPrecioCarrito.appendChild(botonCarrito)

    divStockCantidad.appendChild(stockProducto);
    divStockCantidad.appendChild(cantidadProducto);

    infoProducto.appendChild(divStockCantidad);
    infoProducto.appendChild(divPrecioCarrito);
    
    detallesProducto.appendChild(nombreProducto);
    detallesProducto.appendChild(descripcionProducto);
    detallesProducto.appendChild(infoProducto);

    sectionProductos.appendChild(BloqueIzquierda);
    sectionProductos.appendChild(divImgGrande);
    sectionProductos.appendChild(detallesProducto);

    main.appendChild(sectionProductos);
}   

export function cambiarImgGrande(imagenesDemo){
    const imgGrande = document.querySelector(".imgGrande");
    imagenesDemo.forEach((img) =>{ 
        img.addEventListener("click", (event) => {
            imagenesDemo.forEach((img) => {
                if (img === event.target) {
                    img.classList.add("img-active");
                } else {
                    img.classList.remove("img-active");
                }
            });
            imgGrande.src = event.target.src;
        });
    });
    
    //reseteo de las sombras de imagenes demo
    
    imagenesDemo[0].classList.add("img-active");
    imagenesDemo[1].classList.remove("img-active");
}



