let cantidadImagen = 8; 
let imagenes = []

fetch("data/galeria.json")
.then(response => response.json())
.then(data => {
    imagenes.push(...data); // AGREGO A IMAGENES = [] TODO LO ANTERIOR + DATA
    mostrarImagen(); // // EJECUTO LA FUNCION UNA VEZ QUE LLEGARON LOS DATOS. 
}); 



//ESTA FUNCION MUESTRA LAS IMAGENES DE LA GALERIA DE FOTOS 
function mostrarImagen(){
    const contenedor = document.querySelector(".containerGaleria"); 

    contenedor.innerHTML = ""; 


    for(let i = 0; i < cantidadImagen && i < imagenes.length; i++){ //RECORREMOS EL ARREGLO Y VALIDAMOS CANTIDAD DE IMAGENES Y CONTROLAMOS QUE NO INTENTE MOSTRAR MAS IMAGENES DE LAS QUE EXISTEN 
        contenedor.innerHTML += `
            <div class="containerImagen">
                <img src="${imagenes[i].image}" alt="">
            </div>
        `        
    ; 
    }

    agregarEventoModal();

    const agregar = document.querySelector(".verMas"); 
    if(cantidadImagen < imagenes.length){
        agregar.textContent = "Ver Mas"
    } else{
        agregar.textContent = "Ver Menos"
    }


}; 

// ESTA FUNCION SUMA 6 Y VUELVE A LLAMAR A LA FUNCION
function agregarImagenes(){
    if( cantidadImagen < imagenes.length){
    cantidadImagen += 8;
    } else {
        cantidadImagen = 6; 
    }
    mostrarImagen(); 
}

// ESTA FUNCION ABRE GUARDA Y MUESTRA EL MODAL AL HACER CLICK EN UNA IMAGEN. 
function agregarEventoModal(){
    const modal = document.querySelector("#modalImagenGaleria"); 
    const imagenModal = document.querySelector("#imagenModalGaleria"); 
    const cerrarModal = document.querySelector("#cerrarModalGaleria"); 

    document.querySelectorAll(".containerImagen img").forEach(img => {

        img.addEventListener("click", () => {

            imagenModal.src = img.src; 
            modal.style.display = "flex"; 
        }); 
    }); 

    cerrarModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {

        if(e.target === modal){
            modal.style.display = "none";
        }

    });
}


const agregar = document.querySelector(".verMas"); 
agregar.addEventListener("click", agregarImagenes); // AGREGAMOS EL EVENTO CLICK AL SELECTOR AGREGAR 
