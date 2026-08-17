async function cargarHorarios(){
    try{

       const datos = await obtenerDatos();

        console.log(datos.horarios);

        const horariosAgrupados = agruparHorarios(datos.horarios);

        console.log(horariosAgrupados);

        mostrarHorarios(horariosAgrupados);

        bulmaCarousel.attach('#carouselHorarios', {
            slidesToScroll: 1,
            slidesToShow: 3,
            loop: false,
            autoplay: false,
            autoplaySpeed: 4000
        });

        const loader = document.querySelector("#loader");
        loader.classList.add("oculto");

    } catch (error) {

        console.error("Error:", error);

    } finally {

        // Se ejecuta tanto si carga correctamente como si hay un error
        loader.classList.add("oculto");

    }
}

cargarHorarios();

function agruparHorarios(horarios){

    const horariosPorDia = {};

    horarios.forEach(horario =>{

        if(!horariosPorDia[horario.dia]){
            horariosPorDia[horario.dia] = [];
        }

        horariosPorDia[horario.dia].push(horario); 

      });

     return horariosPorDia;  
}

function mostrarHorarios(horariosPorDia){
    const container = document.querySelector("#carouselHorarios"); 

    container.innerHTML = ""; 

    const diasSemana = [
        "LUNES",
        "MARTES",
        "MIÉRCOLES",
        "JUEVES",
        "VIERNES",
        "SÁBADO",
        "DOMINGO"
    ]; 

    diasSemana.forEach(dia => {

        if (!horariosPorDia[dia]) {
            return;
        }

        let clasesHTML = "";

        horariosPorDia[dia].forEach(horario => {

            clasesHTML += `
                <div class="claseHorario">

                    <p class="horarioDia">
                        ${horario.hora}
                    </p>

                    <p class="clase">
                        ${horario.clase}
                    </p>

                </div>
            `;
        });

        container.innerHTML += `
            <div class="item">

                <div class="card cardHorario">

                    <div class="card-content">
                        <h3 class="title diaSemana">
                            ${dia}
                        </h3>
                    </div>

                    <div class="containerClases">
                        ${clasesHTML}
                    </div>

                </div>

            </div>
        `;
    });
}

