fetch("data/novedades.json")
.then(response => {
    if(!response.ok){
        throw new Error("No se puede cargar el archivo JSON"); 
    }
    return response.json();
})
.then(novedades => {
    mostrarNovedades(novedades); 

    //Iniciamos el carrousel de Bulma
    bulmaCarousel.attach('#carouselNovedades', {
            slidesToScroll: 1,
            slidesToShow: 3,
            loop: true,
            autoplay: true,
            autoplaySpeed: 4000
        });

    }) 
.catch(error => {
    console.error("Error: ", error); 
})


function mostrarNovedades(novedades){

    const contenedorNovedades = document.querySelector("#carouselNovedades"); 

    contenedorNovedades.innerHTML =""; 

    novedades.forEach(novedad => {

        contenedorNovedades.innerHTML += `
            <div class="item-${novedad.id}">
                    <article class="card">
                        <div class="card-image">
                            <figure class="image">
                                <img
                                    src="${novedad.imagen}"
                                    alt="${novedad.tituloPromo}"  
                                >
                            </figure>
                        </div>
                        <div class="card-content">
                            <h3 class="title is-4">${novedad.tituloPromo}</h3>
                            <p>${novedad.textoPromo}</p>
                        </div>
                    </article>
            </div>
        `
    });
}