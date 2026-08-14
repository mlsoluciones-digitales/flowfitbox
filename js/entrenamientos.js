fetch("data/entrenamientos.json")
.then(response => {
    if(!response.ok){
        throw new Error("No se pudo cargar el archivo JSON");
    }
    return response.json(); 
})
.then(entrenamientos => {
    mostrarEntrenamientos(entrenamientos); 

    if(window.matchMedia("(max-width: 768px)").matches){
        bulmaCarousel.attach('#entrenamientoContainer', {
                slidesToScroll: 1,
                slidesToShow: 1,
                loop: true,
                autoplay: true,
                autoplaySpeed: 4000
            });
    }
})
.catch(error => console.error(error))


function mostrarEntrenamientos(entrenamientos){
    const contenedor = document.querySelector("#entrenamientoContainer"); 
    contenedor.innerHTML = "";
    entrenamientos.forEach(entrenamiento => {
        contenedor.innerHTML += `
            <div class="column is-one-third">
                <div class="card">
                    <div class="card-image card-image-entrenamientos">
                        <figure class="image">
                            <img src="${entrenamiento.image}" alt="">
                        </figure>
                    </div>
                    <div class="card-content">
                        <h3 class="title titulo-entrenamiento">
                            ${entrenamiento.titulo}
                        </h3>
                        <p class="texto-entrenamiento">
                            ${entrenamiento.texto}
                        </p>
                    </div>
                </div>
            </div>
        `
        
    }); 
     
}