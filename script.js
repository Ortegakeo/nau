// Asignaturas combinadas: 1er año de Pedagogía en Inglés, luego Parvularia
const malla = [
  // Año 1 - Pedagogía en Inglés
  { id: "fon1", ramo: "Fonética Inglesa I", semestre: 1, prereq: [] },
  { id: "gram1", ramo: "Gramática Inglesa I", semestre: 1, prereq: [] },
  { id: "psicoEd", ramo: "Psicología Educacional", semestre: 1, prereq: [] },
  { id: "fon2", ramo: "Fonética Inglesa II", semestre: 2, prereq: ["fon1"] },
  { id: "gram2", ramo: "Gramática Inglesa II", semestre: 2, prereq: ["gram1"] },
  { id: "ling", ramo: "Lingüística General", semestre: 2, prereq: ["gram1"] },

  // Año 2+ - Pedagogía en Educación Parvularia
  { id: "lengInf", ramo: "Lenguaje y Comunicación en Educación Parvularia I", semestre: 3, prereq: ["psicoEd"] },
  { id: "matInf", ramo: "Matemática en Educación Parvularia I", semestre: 3, prereq: [] },
  { id: "ingOral1", ramo: "Inglés Oral I", semestre: 3, prereq: ["fon2"] },
  { id: "teatro", ramo: "Aprendizaje del Inglés a través de Teatro Creativo", semestre: 3, prereq: ["fon2"] },
  { id: "lengInf2", ramo: "Lenguaje y Comunicación en Educación Parvularia II", semestre: 4, prereq: ["lengInf"] },
  { id: "eval", ramo: "Evaluación en Educación Parvularia", semestre: 4, prereq: ["lengInf"] },
  { id: "ingEventos", ramo: "Aprendizaje del Inglés a través de Estudios de Eventos Mundiales I", semestre: 4, prereq: ["ingOral1"] },
  { id: "parvFam", ramo: "Educación Parvularia: El Rol del Educador y la Familia", semestre: 4, prereq: [] }
];

let ramosAprobados = [];

function cargarMalla() {
  const contenedor = document.getElementById("mallaContainer");
  contenedor.innerHTML = "";

  malla.forEach(ramo => {
    const habilitado = ramo.prereq.every(pr => ramosAprobados.includes(pr));
    const aprobado = ramosAprobados.includes(ramo.id);

    const card = document.createElement("div");
    card.className = "ramo-card";
    card.classList.add(aprobado ? "aprobado" : (habilitado ? "habilitado" : "bloqueado"));

    card.innerHTML = `
      <strong>Semestre ${ramo.semestre}</strong><br>
      ${ramo.ramo}<br>
      <button ${!habilitado || aprobado ? 'disabled' : ''} onclick="aprobarRamo('${ramo.id}')">
        ${aprobado ? "Aprobado" : "Aprobar"}
      </button>
    `;

    contenedor.appendChild(card);
  });
}

function aprobarRamo(id) {
  if (!ramosAprobados.includes(id)) {
    ramosAprobados.push(id);
    cargarMalla();
  }
}

window.onload = cargarMalla;
