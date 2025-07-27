const malla = [
  { nombre: "Introducción a la Bioingeniería Médica", semestre: 1, requisitos: [] },
  { nombre: "Fundamentos de la Estructura del Cuerpo Humano I", semestre: 1, requisitos: [] },
  { nombre: "Matemática y Computación I", semestre: 1, requisitos: [] },
  { nombre: "Física Aplicada", semestre: 1, requisitos: [] },
  { nombre: "Estructura y Reactividad Molecular", semestre: 1, requisitos: [] },
  { nombre: "Fundamentos de la Función del Cuerpo Humano I", semestre: 1, requisitos: [] },

  { nombre: "Fundamentos de la Estructura del Cuerpo Humano II", semestre: 2, requisitos: ["Fundamentos de la Estructura del Cuerpo Humano I"] },
  { nombre: "Matemática y Computación II", semestre: 2, requisitos: ["Matemática y Computación I"] },
  { nombre: "Fundamentos de la Función del Cuerpo Humano II", semestre: 2, requisitos: ["Fundamentos de la Función del Cuerpo Humano I"] },
  { nombre: "Bioquímica I", semestre: 2, requisitos: ["Estructura y Reactividad Molecular"] },
  { nombre: "Metrología de Variables Biomédicas", semestre: 2, requisitos: [] },
  { nombre: "Inglés I", semestre: 2, requisitos: [] }
];

const estados = ["pendiente", "cursando", "aprobada"];
const progreso = JSON.parse(localStorage.getItem("progresoMalla")) || {};

function puedeDesbloquear(asig) {
  return asig.requisitos.every(req => progreso[req] === "aprobada");
}

function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  for (let semestre = 1; semestre <= 3; semestre++) {
    const bloque = document.createElement("div");
    bloque.className = "semestre";
    bloque.innerHTML = `<h2>Semestre ${semestre}</h2>`;

    malla.filter(a => a.semestre === semestre).forEach(asig => {
      const estado = progreso[asig.nombre] || "pendiente";
      const puede = puedeDesbloquear(asig);
      const estadoClase = puede || estado === "aprobada" ? estado : "bloqueada";

      const div = document.createElement("div");
      div.className = `asignatura ${estadoClase}`;
      div.textContent = asig.nombre;

      if (estadoClase !== "bloqueada") {
        div.addEventListener("click", () => {
          let actual = progreso[asig.nombre] || "pendiente";
          let siguiente = estados[(estados.indexOf(actual) + 1) % estados.length];
          progreso[asig.nombre] = siguiente;
          localStorage.setItem("progresoMalla", JSON.stringify(progreso));
          renderMalla();
        });
      } else {
        div.title = `Requiere: ${asig.requisitos.join(", ")}`;
      }

      bloque.appendChild(div);
    });

    contenedor.appendChild(bloque);
  }
}

renderMalla();

