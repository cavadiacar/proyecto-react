import React from 'react';
import Persona from './Persona';

class Egresado extends Persona {
  render() {
    const { cursos } = this.props.egresado;

    return (
      <div>
        <Persona persona={this.props.egresado} />
        <p>Cursos: {cursos.join(', ')}</p>
      </div>
    );
  }
}

export default Egresado;