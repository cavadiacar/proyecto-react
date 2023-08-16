import React, { useState } from "react";
import EstadoCivil from "../Enums/EstadoCivil.jsx";
import Seccion from "../Enums/Seccion.jsx";

function PersonalServicio() {
  const [personal, setPersonal] = useState({
    nombre: "",
    apellido: "",
    numeroIdentificacion: "",
    anioIncorporacion: "",
    nDespacho: "",
    estadoCivil: "",
    seccion: "",
  });

  const estadoCivilOptions = [
    EstadoCivil.SOLTERO,
    EstadoCivil.CASADO,
    EstadoCivil.DIVORCIADO,
    EstadoCivil.VIUDO,
    EstadoCivil.OTRO,
  ];

  const seccionOptions = [
    Seccion.BIBLIOTECA,
    Seccion.DECANATO,
    Seccion.SECRETARIA,
    Seccion.CAFETERIA,
    Seccion.SEGURIDAD,
  ];

  const crearPersonalDeServicio = () => {
    console.log("Personal de servicio creado:", personal);

    setPersonal({
      nombre: "",
      apellido: "",
      numeroIdentificacion: "",
      anioIncorporacion: "",
      nDespacho: "",
      estadoCivil: "",
      seccion: "",
    });
  };

  return (
    <div>
      <h2>Crear Personal de Servicio</h2>
      {/* Resto de los campos de entrada */}
      <div>
        <label>Estado Civil:</label>
        <select
          value={personal.estadoCivil}
          onChange={(e) =>
            setPersonal({ ...personal, estadoCivil: e.target.value })
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
        <label>Sección:</label>
        <select
          value={personal.seccion}
          onChange={(e) =>
            setPersonal({ ...personal, seccion: e.target.value })
          }
        >
          <option value="">Seleccionar</option>
          {seccionOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button onClick={crearPersonalDeServicio}>
        Crear Personal de Servicio
      </button>
    </div>
  );
}

export default PersonalServicio;
