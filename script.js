
const propuestas = [
    {
        titulo: "Justicia y transparencia",
        puntos: [
            "Seguimiento a concursos de escalafón conforme al CCT.",
            "Información clara sobre etapas y criterios aplicables.",
            "Canalización y seguimiento de tus gestiones.",
            "Oportunidades sin favoritismos."
        ]
    },
    {
        titulo: "Salud y condiciones dignas",
        puntos: [
            "Registro de reportes sobre diademas, teclados y sillas.",
            "Seguimiento a solicitudes de reparación o reposición conforme al CCT.",
            "Gestión de valoraciones auditivas y vocales con personal competente.",
            "Propuestas de ergonomía y revisión del entorno de trabajo."
        ]
    },
    {
        titulo: "Bienestar emocional",
        puntos: [
            "Proponer talleres de manejo del estrés e inteligencia emocional.",
            "Impulsar rutas de orientación y canalización.",
            "Gestionar espacios de descanso y activación física."
        ]
    },
    {
        titulo: "Capacitación y defensa",
        puntos: [
            "Gestionar capacitación y guías prácticas ante cambios de plataformas.",
            "Documentar fallas técnicas y solicitar instrucciones claras.",
            "Dar seguimiento a procedimientos conforme al CCT."
        ]
    },
    {
        titulo: "Representación cercana",
        puntos: [
            "Impulsar atención directa para personal de base, temporal y jubilado.",
            "Canalizar solicitudes y darles seguimiento por los medios correspondientes.",
            "Acercar dudas e inquietudes de las áreas a la representación."
        ]
    },
    {
        titulo: "Unidad y bienestar familiar",
        puntos: [
            "Impulsar festejos familiares con organización abierta y cuentas claras.",
            "Proponer excursiones y convivencias con alternativas accesibles, según presupuesto y disponibilidad.",
            "Promover torneos, actividades deportivas y talleres para las familias."
        ]
    },
    {
        titulo: "Rendición de cuentas",
        puntos: [
            "Informar los recursos asignados y ejercidos en convivencias y actividades.",
            "Impulsar un comité plural para acordar sedes, fechas y dinámicas.",
            "Difundir orientación sobre el Fondo Común de Préstamos y CIJUBILA."
        ]
    }
];

const leyendas = [
    "Gestiones sujetas al CCT y a las atribuciones del cargo.",

    "Gestiones sujetas a coordinación, valoración y recursos.",

    "Actividades sujetas a diagnóstico, coordinación, recursos y atribuciones del cargo.",

    "Gestiones sujetas al CCT y a las atribuciones del cargo.",

    "Gestiones sujetas a las atribuciones del cargo y a los canales correspondientes.",

    "Propuestas sujetas a organización, recursos disponibles y atribuciones del cargo.",

    "Información y gestiones sujetas a reglas vigentes y atribuciones del cargo."
];

document.addEventListener("DOMContentLoaded", () => {

    const botones = document.querySelectorAll(".eje");
    const detalle = document.getElementById("detalle-propuesta");
    const titulo = document.getElementById("titulo-propuesta");
    const contenido = document.getElementById("contenido-propuesta");

    let seleccion = null;

    botones.forEach(boton => {

        boton.setAttribute("aria-expanded", "false");
        boton.setAttribute("aria-controls", "detalle-propuesta");

        boton.addEventListener("click", () => {

            const indice = Number(boton.dataset.eje);

            botones.forEach(b => {
                b.classList.remove("activo");
                b.setAttribute("aria-expanded", "false");
            });

            if (seleccion === indice) {
                detalle.hidden = true;
                seleccion = null;
                return;
            }

            const propuesta = propuestas[indice];

            if (!propuesta) return;

            titulo.textContent = propuesta.titulo;

            contenido.innerHTML = `
    <ul>
        ${propuesta.puntos.map(punto =>
            `<li>${punto}</li>`
        ).join("")}
    </ul>
    <p><small>${leyendas[indice]}</small></p>
`;

            detalle.hidden = false;
            seleccion = indice;

            boton.classList.add("activo");
            boton.setAttribute("aria-expanded", "true");

            detalle.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });

        });

    });

});
