import React from "react";
import Persona from "./Persona";

class Funcionario extends Persona {
  render() {
    const { anioIncorporacion, nDespacho } = this.props.funcionario;

    return (
      <div>
        <Persona persona={this.props.funcionario} />
        <p>Año de Incorporación: {anioIncorporacion}</p>
        <p>Número de Despacho: {nDespacho}</p>
      </div>
    );
  }
}

export default Funcionario;
