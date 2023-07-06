import React, { Component, Fragment } from "react";

const Computacion = () => (
  <Fragment>
    <li>Monitor</li>
    <li>Teclado</li>
    <li>Mouse</li>
  </Fragment>
);

const Ropa = () => (
  <Fragment>
    <li>Camiseta</li>
    <li>Tenis</li>
    <li>Pantalon</li>
  </Fragment>
);

class ElementosSinEtiquetasConFragments extends Component {
  render() {
    return (
      <ul>
        <Computacion />
        <Ropa />
      </ul>
    );
  }
}

export default ElementosSinEtiquetasConFragments;
