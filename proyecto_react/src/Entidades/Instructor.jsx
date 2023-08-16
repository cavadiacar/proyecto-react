import React from 'react';
import Empleado from '../Empleado';

class Instructor extends Funcionario {
  render() {
    const { departamento } = this.props.instructor;

    return (
      <div>
        <Empleado empleado={this.props.instructor} />
        <p>Departamento: {departamento}</p>
      </div>
    );
  }
}

export default Instructor;