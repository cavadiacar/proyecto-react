import React, { useState } from "react";

function PersonaServicio() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [numeroIdentificacion, setNumeroIdentificacion] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");

  const estadoCivilOptions = [
    "Soltero(a)",
    "Casado(a)",
    "Divorciado(a)",
    "Viudo(a)",
    "Otro",
  ];

  const crearPersona = () => {
    if (!nombre || !apellido || !numeroIdentificacion || !estadoCivil) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const nuevaPersona = {
      nombre,
      apellido,
      numeroIdentificacion,
      estadoCivil,
    };

    console.log("Persona creada:", nuevaPersona);

    setNombre("");
    setApellido("");
    setNumeroIdentificacion("");
    setEstadoCivil("");
  };

  return (
    <div>
      <h2>Crear Persona</h2>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div>
        <label>Apellido:</label>
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
      </div>
      <div>
        <label>Número de Identificación:</label>
        <input
          type="text"
          value={numeroIdentificacion}
          onChange={(e) => setNumeroIdentificacion(e.target.value)}
        />
      </div>
      <div>
        <label>Estado Civil:</label>
        <select
          value={estadoCivil}
          onChange={(e) => setEstadoCivil(e.target.value)}
        >
          <option value="">Seleccionar</option>
          {estadoCivilOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button onClick={crearPersona}>Crear Persona</button>
    </div>
  );
}

export default PersonaServicio;
