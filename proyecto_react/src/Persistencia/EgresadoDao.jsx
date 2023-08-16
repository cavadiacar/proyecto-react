import React, { useState, useEffect } from "react";

function EgresadoDao() {
  const [egresados, setEgresados] = useState([]);

  useEffect(() => {}, []);

  const guardarEgresado = async (egresado) => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  const modificarEgresado = async (egresado) => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  const eliminarEgresado = async (id) => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  const listarEgresados = () => {
    return egresados;
  };

  const matricularEgresadoaCurso = async (egresado, curso) => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  const retirarEgresadoDeCursoPorIdyNombre = async (id, nombre) => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* JSX para mostrar la lista de egresados y otras funcionalidades */}
    </div>
  );
}

export default EgresadoDao;
