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
                <p class="descripcionPlan">
                    ${plan.descripcionPlan}
                </p>
                <p class="valorPlan">VALOR $${plan.valor}</p>
                <div class="containerButtonPlan">
                    <button class="button buttonPlan">Contactarme</button>
                </div>
            </div>    
        ` 
    });

}