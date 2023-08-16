import React from 'react';
import Empleado from '../Empleado';

class PersonalDeServicio extends Empleado {
  render() {
    const { seccion } = this.props.personalDeServicio;

    return (
      <div>
        <Empleado empleado={this.props.personalDeServicio} />
        <p>Sección: {seccion}</p>
      </div>
    );
  }
}

export default PersonalDeServicio;