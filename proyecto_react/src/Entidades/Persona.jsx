import React from 'react';

class Persona extends React.Component {
  render() {
    const { nombre, numero_identificacion, apellido, estadoCivil } = this.props.persona;

    return (
      <div>
        <p>ID: {this.props.persona.Id}</p>
        <p>Nombre: {nombre}</p>
        <p>Identificación: {numero_identificacion}</p>
        <p>Apellido: {apellido}</p>
        <p>Estado Civil: {estadoCivil}</p>
      </div>
    );
  }
}

export default Persona;