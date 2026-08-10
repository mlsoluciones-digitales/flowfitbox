fetch("https://script.google.com/macros/s/AKfycbxsY7hsH2jg-c_NsWeR15HUUGj03Y9teb3uBbha2pUwLZqB-4uJ3WTFWCCzb4ICBOzy/exec")
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
                                    src="image/${novedad.imagen}"
                                    alt="${novedad.titulo}"  
                                >
                            </figure>
                        </div>
                        <div class="card-content">
                            <h3 class="title is-4">${novedad.titulo}</h3>
                            <p>${novedad.texto}</p>
                        </div>
                    </article>
            </div>
        `
    });
}