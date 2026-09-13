let cantidadImagen = 6; 
let imagenes = []

fetch("data/galeria.json")
.then(response => response.json())
.then(data => {
    imagenes.push(...data); // AGREGO A IMAGENES = [] TODO LO ANTERIOR + DATA
    mostrarImagen(); // // EJECUTO LA FUNCION UNA VEZ QUE LLEGARON LOS DATOS. 
}); 

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
}; 

// ESTA FUNCION SUMA 6 Y VUELVE A LLAMAR A LA FUNCION
function agregarImagenes(){

    cantidadImagen += 6;
    mostrarImagen(); 
}


const agregar = document.querySelector(".verMas"); 
agregar.addEventListener("click", agregarImagenes); // AGREGAMOS EL EVENTO CLICK AL SELECTOR AGREGAR 