import React, { useState } from "react";
import EstadoCivil from "../Enums/EstadoCivil.jsx";

function FuncionarioServicio() {
  const [funcionario, setFuncionario] = useState({
    id: null,
    nombre: "",
    apellido: "",
    numero_identificacion: "",
    anioIncorporacion: "",
    nDespacho: "",
    estadoCivil: "",
  });

  const crearFuncionario = async () => {
    console.log("Bienvenido a la creación de funcionario");
    try {
      const nuevoEmpleado = { ...funcionario, estadoCivil: estadoCivil() };
    } catch (error) {
      console.error("Error al crear funcionario", error);
    }
  };

  const modificarFuncionario = async () => {
    console.log("Bienvenido a la modificación de funcionarios");
    try {
      if (!funcionario.id) {
        throw new Error();
      } else {
        const funcionarioModificado = { ...funcionario, estadoCivil: estadoCivil() };
      }
    } catch (error) {
      console.error("Error al modificar funcionario", error);
    }
  };

  const eliminarFuncionario = async () => {
    try {
      console.log("Bienvenido a la eliminación de funcionarios");
    } catch (error) {
      console.error("Error al eliminar funcionario", error);
    }
  };

  const cambiarDespacho = async () => {
    try {
      console.log("Bienvenido al panel de cambio de despacho");
      const nuevoDespacho = prompt("Ingrese el nuevo despacho");
    } catch (error) {
      console.error("Error al cambiar despacho", error);
    }
  };

  const cambiarAnioDeIncorporacion = async () => {
    try {
      console.log("Bienvenido al panel de cambio de año de incorporación");
      const nuevoAnio = prompt("Ingrese el nuevo año de incorporación");
    } catch (error) {
      console.error("Error al modificar año de incorporación", error);
    }
  };

  const listarFuncionarios = async () => {
    console.log("Bienvenido a la lista de funcionarios");
    try {
    } catch (error) {
      console.error("Error al listar funcionarios", error);
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

  const validarOpcion = (opcion) => {
    while (opcion < 1 || opcion > 5) {
      alert("Elija una opción correcta");
      opcion = parseInt(prompt("Elija el estado civil"));
    }
  };

  return (
    <div>
      <h2>Panel de Control de Funcionarios</h2>
      <form>
        <label>Nombre:</label>
        <input
          type="text"
          value={funcionario.nombre}
          onChange={(e) => setFuncionario({ ...funcionario, nombre: e.target.value })}
        />
        <button onClick={crearFuncionario}>Crear Funcionario</button>
      </form>
    </div>
  );
}

export default FuncionarioServicio;
