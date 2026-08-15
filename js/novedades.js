async function cargarNovedades() {

    try {

        const response = await fetch("https://script.google.com/macros/s/AKfycbxsY7hsH2jg-c_NsWeR15HUUGj03Y9teb3uBbha2pUwLZqB-4uJ3WTFWCCzb4ICBOzy/exec");

        if (!response.ok) {
            throw new Error("No se puede cargar el archivo JSON");
        }

        const datos = await response.json();
        console.log(datos)
        mostrarNovedades(datos.novedades);

        // Acá podríamos inicializar el carrusel
        bulmaCarousel.attach('#carouselNovedades', {
            slidesToScroll: 1,
            slidesToShow: 3,
            loop: true,
            autoplay: true,
            autoplaySpeed: 4000
        });
        
        const loader = document.querySelector("#loader");
        loader.classList.add("oculto");

    } catch (error) {

        console.error("Error:", error);
        
    }
}


function mostrarNovedades(novedades){

    const contenedorNovedades = document.querySelector("#carouselNovedades"); 

    contenedorNovedades.innerHTML =""; 

    novedades.forEach(novedad => {

        contenedorNovedades.innerHTML += `
            <div class="item-${novedad.id}">
                    <article class="card cardNovedad">
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

cargarNovedades();