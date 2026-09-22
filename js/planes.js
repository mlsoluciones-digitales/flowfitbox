fetch("data/planes.json")
.then(response => response.json())
.then(planes => mostrarPlanes(planes))


function mostrarPlanes(planes){
    const container = document.querySelector(".containerPlanes"); 
    container.innerHTML = ``; 

    planes.forEach(plan => {
        container.innerHTML += `
            <div class="detallePlan">
                <h4 class="tituloPlan">${plan.tituloPlan}</h4>

                <h6 class="subtituloPlan">${plan.subtitulo}</h6>

                <p class="descripcionPlan">
                    ${plan.descripcionPlan}
                </p>
                <div class="containerButtonPlan">
                    <a href="https://wa.me/541176544106?text=${plan.mensajeWhatsApp}"><button class="button buttonPlan">ESCRIBINOS</button></a>
                </div>
            </div>    
        ` 
    });

}