import React, { useState } from "react";
import PersonaServicio from "./PersonaServicio";
import EgresadoServicio from "./EgresadoServicio";
import FuncionarioServicio from "./FuncionarioServicio";
import InstructorServicio from "./InstructorServicio";
import PersonalServicio from "./PersonalServicio";

function PanelControl() {
  const [opcion, setOpcion] = useState(null);
  const personaServicio = new PersonaServicio();
  const egresadoServicio = new EgresadoServicio();
  const funcionarioServicio = new FuncionarioServicio();
  const instructorServicio = new InstructorServicio();
  const personalServicio = new PersonalServicio();

  const validarEleccion = (opcionSN) => {
    return opcionSN.toUpperCase() === "S";
  };

  const mostrarMenu = () => {
    return (
      <div>
        <h2>Bienvenido al menú de opciones</h2>
        <p>Elija la opción que necesite:</p>
        <button onClick={() => setOpcion(1)}>1. Crear persona</button>
        <button onClick={() => setOpcion(2)}>2. Modificar persona</button>
        <button onClick={() => setOpcion(3)}>3. Eliminar persona</button>
        <button onClick={() => setOpcion(4)}>4. Listar persona</button>
        <button onClick={() => setOpcion(5)}>5. Crear Egresado</button>
        <button onClick={() => setOpcion(6)}>6. Matricular egresado</button>
        <button onClick={() => setOpcion(7)}>7. Modificar egresado</button>
        <button onClick={() => setOpcion(8)}>
          8. Retirar egresado de curso
        </button>
        <button onClick={() => setOpcion(9)}>9. Eliminar egresado</button>
        <button onClick={() => setOpcion(10)}>10. Listar egresados</button>
        <button onClick={() => setOpcion(11)}>11. Crear funcionario</button>
        <button onClick={() => setOpcion(12)}>12. Modificar funcionario</button>
        <button onClick={() => setOpcion(13)}>13. Eliminar funcionario</button>
        <button onClick={() => setOpcion(14)}>
          14. Cambiar despacho de funcionario
        </button>
        <button onClick={() => setOpcion(15)}>
          15. Cambiar año de incorporación de funcionario
        </button>
        <button onClick={() => setOpcion(16)}>16. Listar funcionarios</button>
        <button onClick={() => setOpcion(17)}>17. Crear instructor</button>
        <button onClick={() => setOpcion(18)}>18. Modificar instructor</button>
        <button onClick={() => setOpcion(19)}>19. Eliminar instructor</button>
        <button onClick={() => setOpcion(20)}>
          20. Cambiar de departamento a instructor
        </button>
        <button onClick={() => setOpcion(21)}>21. Listar instructores</button>
        <button onClick={() => setOpcion(22)}>
          22. Crear instructor de servicio
        </button>
        <button onClick={() => setOpcion(23)}>
          23. Modificar funcionario de servicio
        </button>
        <button onClick={() => setOpcion(24)}>
          24. Eliminar funcionario de servicio
        </button>
        <button onClick={() => setOpcion(25)}>
          25. Cambiar seccion de funcionario de servicio
        </button>
        <button onClick={() => setOpcion(26)}>
          26. Listar funcionarios de servicio
        </button>
        <button onClick={() => setOpcion(27)}>27. Salir</button>
      </div>
    );
  };

  const ejecutarOpcion = () => {
    const opcionValida = validarOpcion(opcion);

    if (!validarEleccion("S")) {
      return;
    }

    switch (opcionValida) {
      case 1:
        if (!validarEleccion("S")) {
          break;
        }
        personaServicio.crearPersona();
        break;
      case 2:
        if (!validarEleccion("S")) {
          break;
        }
        personaServicio.modificarPersona();
        break;
      case 3:
        if (!validarEleccion("S")) {
          break;
        }
        personaServicio.eliminarPersona();
        break;
      case 4:
        if (!validarEleccion("S")) {
          break;
        }
        personaServicio.listarPersonas();
        break;
      case 5:
        if (!validarEleccion("S")) {
          break;
        }
        egresadoServicio.crearEgresado();
        break;
      case 6:
        if (!validarEleccion("S")) {
          break;
        }
        egresadoServicio.matricularEgresadoACurso();
        break;
      case 7:
        if (!validarEleccion("S")) {
          break;
        }
        egresadoServicio.modificarEgresado();
        break;
      case 8:
        if (!validarEleccion("S")) {
          break;
        }
        egresadoServicio.retirarEgresadoDeCurso();
        break;
      case 9:
        if (!validarEleccion("S")) {
          break;
        }
        egresadoServicio.eliminarEgresado();
        break;
      case 10:
        if (!validarEleccion("S")) {
          break;
        }
        egresadoServicio.listarEgresados();
        break;
      case 11:
        if (!validarEleccion("S")) {
          break;
        }
        funcionarioServicio.crearFuncionario();
        break;
      case 12:
        if (!validarEleccion("S")) {
          break;
        }
        funcionarioServicio.modificarFuncionario();
        break;
      case 13:
        if (!validarEleccion("S")) {
          break;
        }
        funcionarioServicio.eliminarFuncionario();
        break;
      case 14:
        if (!validarEleccion("S")) {
          break;
        }
        funcionarioServicio.cambiarDespacho();
        break;
      case 15:
        if (!validarEleccion("S")) {
          break;
        }
        funcionarioServicio.cambiarAnioDeIncorporacion();
        break;
      case 16:
        if (!validarEleccion("S")) {
          break;
        }
        funcionarioServicio.listarFuncionarios();
        break;
      case 17:
        if (!validarEleccion("S")) {
          break;
        }
        instructorServicio.crearInstructor();
        break;
      case 18:
        if (!validarEleccion("S")) {
          break;
        }
        instructorServicio.modificarInstructor();
        break;
      case 19:
        if (!validarEleccion("S")) {
          break;
        }
        instructorServicio.eliminarInstructor();
        break;
      case 20:
        if (!validarEleccion("S")) {
          break;
        }
        instructorServicio.cambiarDepartamento();
        break;
      case 21:
        if (!validarEleccion("S")) {
          break;
        }
        instructorServicio.listarInstructores();
        break;
      case 22:
        if (!validarEleccion("S")) {
          break;
        }
        personalServicio.crearPersonalDeServicio();
        break;
      case 23:
        if (!validarEleccion("S")) {
          break;
        }
        personalServicio.modificarPersonalDeServicio();
        break;
      case 24:
        if (!validarEleccion("S")) {
          break;
        }
        personalServicio.eliminarPersonaDeServicio();
        break;
      case 25:
        if (!validarEleccion("S")) {
          break;
        }
        personalServicio.cambiarSeccion();
        break;
      case 26:
        if (!validarEleccion("S")) {
          break;
        }
        personalServicio.listarInstructores();
        break;
      case 27:
        break;
      default:
        break;
    }
  };

  const validarOpcion = (opcion) => {
    while (opcion < 1 || opcion > 27) {
      console.log("Ingrese una opción correcta");
      opcion = parseInt(prompt("Ingrese una opción correcta"));
    }
    return opcion;
  };

  // Renderizar el componente del menú
  return (
    <div>
      {mostrarMenu()}
      <button onClick={ejecutarOpcion}>Ejecutar Opción</button>
    </div>
  );
}
export default PanelControl;
