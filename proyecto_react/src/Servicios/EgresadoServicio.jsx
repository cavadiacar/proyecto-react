import React, { useState } from "react";
import EstadoCivil from "../Enums/EstadoCivil.jsx";
import Cursos from "../Enums/Cursos.jsx";

function EgresadoServicio() {
  const [egresado, setEgresado] = useState({
    id: null,
    nombre: "",
    apellido: "",
    numero_identificacion: "",
    estadoCivil: "",
  });

  const validarOpcion = (opcion) => {
    while (opcion < 1 || opcion > 5) {
      alert("Elija una opción correcta");
      opcion = parseInt(prompt("Elija el estado civil"));
    }
  };

  const validarOpcionCurso = (opcion) => {
    while (opcion < 1 || opcion > 5) {
      alert("Elija una opción correcta");
      opcion = parseInt(prompt("Elija el curso"));
    }
  };

  const validarSN = (opcion) => {
    while (opcion.toUpperCase() !== "S" && opcion.toUpperCase() !== "N") {
      alert("Elija una opción correcta (S/N)");
      opcion = prompt("S/N");
    }
  };

  const estadoCivil = () => {
    const opcion = parseInt(prompt("Elija el estado civil"));
    validarOpcion(opcion);
    switch (opcion) {
      case 1:
        return EstadoCivil.SOLTERO;
      case 2:
        return EstadoCivil.CASADO;
      case 3:
        return EstadoCivil.DIVORCIADO;
      case 4:
        return EstadoCivil.VIUDO;
      case 5:
        return EstadoCivil.UNION_LIBRE;
      default:
        return "";
    }
  };

  const seleccionarCurso = () => {
    const opcion = parseInt(prompt("Elija el curso"));
    validarOpcionCurso(opcion);
    switch (opcion) {
      case 1:
        return Cursos.ALGEBRA;
      case 2:
        return Cursos.GEOMETRIA;
      case 3:
        return Cursos.LENGUAS;
      case 4:
        return Cursos.ESPAÑOL;
      case 5:
        return Cursos.DISEÑO;
      default:
        return "";
    }
  };

  const crearEgresado = async () => {
    console.log("Bienvenido a la creación de egresados");
    try {
      const nuevoEgresado = { ...egresado, estadoCivil: estadoCivil() };

      console.log("¿Desea matricular al egresado en algún curso? S/N");
      const opcion = prompt("S/N");
      validarSN(opcion);
      if (opcion.toUpperCase() === "S") {
        const cursoSeleccionado = seleccionarCurso();
      }
    } catch (error) {
      console.error("Error al crear egresado", error);
    }
  };

  const modificarEgresado = async () => {
    console.log("Bienvenido a la modificación de egresados");
    try {
      const egresadoModificado = {
        ...egresado,
        estadoCivil: estadoCivil(),
      };

      console.log("¿Desea matricular al egresado en algún curso? S/N");
      const opcion = prompt("S/N");
      validarSN(opcion);
      if (opcion.toUpperCase() === "S") {
        const cursoSeleccionado = seleccionarCurso();
      }
    } catch (error) {
      console.error("Error al modificar egresado", error);
    }
  };

  return (
    <div>
      {/* JSX para renderizar componentes relacionados con el servicio de egresado */}
    </div>
  );
}

export default EgresadoServicio;
