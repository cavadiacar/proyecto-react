import React, { useEffect } from "react";

function CursoDao() {
  useEffect(() => {
    crearCursos();
  }, []);

  const crearCursos = async () => {
    try {
      const response = await fetch("/api/cursos");
      const cursos = await response.json();

      const cursosExistentes = cursos.map((curso) => curso.nombre);

      for (const curso of Object.values(Cursos)) {
        if (!cursosExistentes.includes(curso.materia)) {
          await crearCurso(curso.materia);
        }
      }
    } catch (error) {
      console.error("No se pueden crear los cursos", error);
    }
  };

  const crearCurso = async (nombre) => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* JSX para mostrar información relacionada con la creación de cursos */}
    </div>
  );
}

const Cursos = {
  MATEMATICA: { materia: "Matemática" },
  FISICA: { materia: "Física" },
  QUIMICA: { materia: "Química" },
};

export default CursoDao;
