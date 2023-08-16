import { useState, useEffect } from "react";

const Seccion = {
  BIBLIOTECA: "Biblioteca",
  DECANATO: "Decanato",
  SECRETARIA: "Secretaria",
  CAFETERIA: "Cafeteria",
  SEGURIDAD: "Seguridad",
};

function SeccionDAO() {
  const [secciones, setSecciones] = useState([]);

  useEffect(() => {
    
    async function fetchSecciones() {
      try {
       
        const response = await fetch("/api/secciones"); 
        const data = await response.json();

        setSecciones(data);
      } catch (error) {
        console.error("Error al obtener las secciones:", error);
      }
    }

    fetchSecciones();
  }, []);

  return (
    <div>
      <h2>Lista de Secciones:</h2>
      <ul>
        {secciones.map((seccion) => (
          <li key={seccion.id}>{seccion.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default SeccionDAO;