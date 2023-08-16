import React, { useState } from "react";
import EstadoCivil from "../Enums/EstadoCivil.jsx";
import Departamentos from "../Enums/Departamentos.jsx"; // Importa el enum de Departamentos

function InstructorServicio() {
  const [instructor, setInstructor] = useState({
    nombre: "",
    apellido: "",
    numeroIdentificacion: "",
    anioIncorporacion: "",
    nDespacho: "",
    estadoCivil: "",
    departamento: "",
  });

  const estadoCivilOptions = [
    EstadoCivil.SOLTERO,
    EstadoCivil.CASADO,
    EstadoCivil.DIVORCIADO,
    EstadoCivil.VIUDO,
    EstadoCivil.OTRO,
  ];

  const departamentoOptions = [
    Departamentos.MATEMATICAS,
    Departamentos.LENGUAJES,
    Departamentos.ARQUITECTURA,
    Departamentos.CIENCIAS,
    Departamentos.DERECHO,
    Departamentos.PROGRAMACION,
  ];

  const crearInstructor = () => {
    console.log("Instructor creado:", instructor);

    setInstructor({
      nombre: "",
      apellido: "",
      numeroIdentificacion: "",
      anioIncorporacion: "",
      nDespacho: "",
      estadoCivil: "",
      departamento: "",
    });
  };

  return (
    <div>
      <h2>Crear Instructor</h2>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={instructor.nombre}
          onChange={(e) => setInstructor({ ...instructor, nombre: e.target.value })}
        />
      </div>
      {/* Resto de los campos de entrada */}
      <div>
        <label>Estado Civil:</label>
        <select
          value={instructor.estadoCivil}
          onChange={(e) =>
            setInstructor({ ...instructor, estadoCivil: e.target.value })
          }
        >
          <option value="">Seleccionar</option>
          {estadoCivilOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Departamento:</label>
        <select
          value={instructor.departamento}
          onChange={(e) =>
            setInstructor({ ...instructor, departamento: e.target.value })
          }
        >
          <option value="">Seleccionar</option>
          {departamentoOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button onClick={crearInstructor}>Crear Instructor</button>
    </div>
  );
}

export default InstructorServicio;
