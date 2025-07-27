const malla = [
  // -------- Año 1: Pedagogía en Educación Media en Inglés (Semestres 1 y 2) --------
  { id: "teatro", ramo: "Aprendizaje del Inglés a través de Teatro Creativo", semestre: 1, prereq: [] },
  { id: "estudios1", ramo: "Aprendizaje del Inglés a través de Estudios Culturales I", semestre: 1, prereq: [] },
  { id: "ingles1", ramo: "Inglés Oral: Pronunciación, Entonación y Expresión I", semestre: 1, prereq: [] },
  { id: "tec1", ramo: "Uso de la Tecnología para la Comunicación Global I", semestre: 1, prereq: [] },
  { id: "com1", ramo: "Comunicación Oral y Escrita I", semestre: 1, prereq: [] },
  { id: "deporte1", ramo: "Deporte I", semestre: 1, prereq: [] },

  { id: "literatura", ramo: "Aprendizaje del Inglés a través de la Literatura Infantil", semestre: 2, prereq: [] },
  { id: "estudios2", ramo: "Aprendizaje del Inglés a través de Estudios Culturales II", semestre: 2, prereq: [] },
  { id: "ingles2", ramo: "Inglés Oral: Pronunciación, Entonación y Expresión II", semestre: 2, prereq: ["ingles1"] },
  { id: "tec2", ramo: "Uso de la Tecnología para la Comunicación Global II", semestre: 2, prereq: [] },
  { id: "com2", ramo: "Comunicación Oral y Escrita II", semestre: 2, prereq: ["com1"] },
  { id: "deporte2", ramo: "Deporte II", semestre: 2, prereq: [] },

  // Indicador cambio carrera
  { id: "cambio-carrera", esCambio: true },

  // -------- Año 2: Educación Parvularia con mención Inglés (Semestre 3 y 4) --------
  { id: "lingEsp", ramo: "Lingüística Española Aplicada", semestre: 3, prereq: [] },
  { id: "salud", ramo: "Salud y Nutrición del Párvulo", semestre: 3, prereq: [] },
  { id: "obs1", ramo: "Práctica de Observación I", semestre: 3, prereq: [] },
  { id: "rolFam", ramo: "Educación Parvularia: El Rol del Educador y la Familia", semestre: 3, prereq: [] },
  { id: "eventos1", ramo: "Aprendizaje del Inglés a través de Estudios de Eventos Mundiales I", semestre: 3, prereq: [] },
  { id: "autogestion", ramo: "Autogestión del Aprendizaje", semestre: 3, prereq: [] },

  { id: "facilLeng", ramo: "Facilitación de la Adquisición de la Lengua Extranjera en Niños", semestre: 4, prereq: [] },
  { id: "teorias", ramo: "Teorías de Aprendizaje en la Primera Infancia", semestre: 4, prereq: [] },
  { id: "planif", ramo: "Planificación y Gestión de Ambientes en la Educación Inicial", semestre: 4, prereq: [] },
  { id: "obs2", ramo: "Práctica de Observación II", semestre: 4, prereq: ["obs1"] },
  { id: "curriculum", ramo: "Curriculum y el Desarrollo de la Educación Parvularia en Chile", semestre: 4, prereq: [] },
  { id: "eventos2", ramo: "Aprendizaje del Inglés a través de Estudios de Eventos Mundiales II", semestre: 4, prereq: ["eventos1"] },
  { id: "b2", ramo: "Preparación y Rendición Examen Idioma Inglés MCER B2", semestre: 4, prereq: ["eventos1"] },
  { id: "trabajoEquipo", ramo: "Trabajo en Equipo y Desarrollo de Habilidades Sociales", semestre: 4, prereq: [] },

  // -------- Año 3 --------
  { id: "metodosIngles", ramo: "Métodos en la Enseñanza del Idioma Inglés", semestre: 5, prereq: [] },
  { id: "evalAprendizaje", ramo: "Evaluación del Aprendizaje", semestre: 5, prereq: [] },
  { id: "practicaInicial", ramo: "Práctica Inicial", semestre: 5, prereq: [] },
  { id: "introMetodologia", ramo: "Introducción a la Metodología de la Investigación", semestre: 5, prereq: [] },
  { id: "litUniversal1", ramo: "Aprendizaje del Inglés a través de la Literatura Universal I", semestre: 5, prereq: [] },
  { id: "compSociales", ramo: "Comprensión de Contextos Sociales", semestre: 5, prereq: [] },

  { id: "leng2", ramo: "Lenguaje y Comunicación en Educación Parvularia II", semestre: 6, prereq: [] },
  { id: "mat2", ramo: "Matemática en Educación Parvularia II", semestre: 6, prereq: [] },
  { id: "cienNat", ramo: "Ciencias Naturales en Educación Parvularia", semestre: 6, prereq: [] },
  { id: "evalParv", ramo: "Evaluación en Educación Parvularia", semestre: 6, prereq: [] },
  { id: "practInt1", ramo: "Práctica Intensiva I", semestre: 6, prereq: [] },
  { id: "investCual", ramo: "Investigación Cualitativa y Cuantitativa", semestre: 6, prereq: [] },
  { id: "estudDesNino", ramo: "Aprendizaje del Inglés a través de Estudios de Desarrollo del Niño", semestre: 6, prereq: [] },
  { id: "compCult", ramo: "Comprensión de Contextos Culturales", semestre: 6, prereq: [] },

  // -------- Año 4 --------
  { id: "psico", ramo: "Psicología del Desarrollo y Aprendizaje en la Primera Infancia", semestre: 7, prereq: [] },
  { id: "musica", ramo: "Música", semestre: 7, prereq: [] },
  { id: "inclusion", ramo: "Inclusión en Educación Parvularia", semestre: 7, prereq: [] },
  { id: "pracInvestAccion", ramo: "Práctica de Investigación - Acción", semestre: 7, prereq: [] },
  { id: "inglesTemasGlobales", ramo: "Aprendizaje del Inglés a través de Temas Globales", semestre: 7, prereq: [] },
  { id: "etica", ramo: "Ética y Responsabilidad Social", semestre: 7, prereq: [] },

  { id: "difDesLeng", ramo: "Dificultades en el Desarrollo del Lenguaje en el Nivel de Educación Parvularia", semestre: 8, prereq: [] },
  { id: "artesVis", ramo: "Artes Visuales", semestre: 8, prereq: [] },
  { id: "practInt2", ramo: "Práctica Intensiva II", semestre: 8, prereq: [] },
  { id: "proyGrado", ramo: "Proyecto de Grado", semestre: 8, prereq: [] },
  { id: "gestParv", ramo: "Práctica: Gestión en Educación Parvularia", semestre: 8, prereq: [] },
  { id: "inglesTemasGlobalesEd", ramo: "Aprendizaje del Inglés a través de Temas Globales en Educación", semestre: 8, prereq: [] },
  { id: "respSocial", ramo: "Responsabilidad Social", semestre: 8, prereq: [] },

  // -------- Año 5 --------
  { id: "respEmerg", ramo: "Respuestas a Emergencias y Primeros Auxilios", semestre: 9, prereq: [] },
  { id: "ambColab", ramo: "Creación de un Ambiente de Colaboración", semestre: 9, prereq: [] },
  { id: "pracProf", ramo: "Práctica Profesional", semestre: 9, prereq: [] },
  { id: "topEduc", ramo: "Tópicos Educacionales: Seminarios Dirigidos por Estudiantes", semestre: 9, prereq: [] }
];

let estadoRamos = {}; // id: 'bloqueado' | 'habilitado' | 'aprobado' | 'reprobado'

function cargarMalla() {
  const contenedor = document.getElementById("mallaContainer");
  contenedor.innerHTML = "";

  malla.forEach(ramo => {
    if (ramo.esCambio) {
      const linea = document.createElement("div");
      linea.id = "linea-cambio";
      linea.textContent = "⇨ CAMBIO DE CARRERA ⇨";
      contenedor.appendChild(linea);
      return;
    }

    const estadoActual = calcularEstado(ramo);
    estadoRamos[ramo.id] = estadoRamos[ramo.id] || estadoActual;

    const card = document.createElement("div");
    card.className = "ramo-card " + estadoRamos[ramo.id];
    card.innerHTML = `<strong>Semestre ${ramo.semestre}</strong><br>${ramo.ramo}`;



function toggleEstado(id) {
  const estados = ["bloqueado", "habilitado", "aprobado", "reprobado"];
  let actual = estados.indexOf(estadoRamos[id]);
  estadoRamos[id] = estados[(actual + 1) % estados.length];
  cargarMalla();
}

card.addEventListener("click", () => toggleEstado(ramo.id));
card.addEventListener("touchstart", (e) => {
  e.preventDefault(); // para evitar doble evento click
  toggleEstado(ramo.id);
});

    contenedor.appendChild(card);
  });
}

function calcularEstado(ramo) {
  if (ramo.prereq.length === 0) return "habilitado";
  const todosAprobados = ramo.prereq.every(id => estadoRamos[id] === "aprobado");
  return todosAprobados ? "habilitado" : "bloqueado";
}

window.onload = cargarMalla;
