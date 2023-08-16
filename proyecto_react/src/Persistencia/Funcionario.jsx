import React, { useState, useEffect } from "react";

function FuncionarioDao() {
  const [funcionario, setFuncionario] = useState([]);

  useEffect(() => {}, []);

  const guardarFuncionario = async (funcionario) => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  const modificarFuncionario = async (funcionario) => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  const eliminarFuncionario = async (id) => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  const listarFuncionario = () => {
    return funcionario;
  };

  const cambiarDespachoPorId = async (id, despacho) => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  const cambiarAnioIncorporacionPorId = async (id, anioIncorporacion) => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* JSX para mostrar la lista de funcionarios y otras funcionalidades */}
    </div>
  );
}

export default FuncionarioDao;
