const elementosAnimados = document.querySelectorAll(".entrenamiento, .textoFlow"
);

const observer = new IntersectionObserver((elementos) => {

    elementos.forEach(elemento => {

        if (elemento.isIntersecting) {

            elemento.target.classList.add(
                "animate__animated",
                "animate__slideInUp"
            );

            elemento.target.style.opacity = "1";

            observer.unobserve(elemento.target);
        }

    });

}, {
    threshold: 0.2
});


elementosAnimados.forEach(elemento => {
    observer.observe(elemento);
});


// PLANES CREADOS POR FETCH

const observer2 = new IntersectionObserver((elementos) => {

    elementos.forEach(elemento => {

        if (elemento.isIntersecting) {

            const planes = elemento.target.querySelectorAll(".detallePlan");

            planes.forEach((plan, index) => {

                setTimeout(() => {

                    plan.classList.add(
                        "animate__animated",
                        "animate__fadeInUp"
                    );

                    plan.style.opacity = "1";

                }, index * 200);

            });

            observer2.unobserve(elemento.target);
        }

    });

}, {
    threshold: 0.2
});


const seccionPlanes = document.querySelector("#planes");

observer2.observe(seccionPlanes);