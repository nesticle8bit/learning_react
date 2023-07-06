import React from "react";
// import "./tarjetaFruta.css";
import frutasStyles from "./tarjetaFruta.module.css";

class TarjetaFruta extends React.Component {
  // constructor() {
  //   super()

  //   const METHODS = ['addCantidad', 'removeCantidad', 'limpiar']

  //   METHODS.forEach((method) => {
  //     this[method] = this[method].bind(this)
  //   })

  //   // Para no agregar .bind() en las funciones que se llaman en el HTML se agregan los bind aqui en el constructor
  //   // this.addCantidad = this.addCantidad.bind(this)
  //   // this.removeCantidad = this.removeCantidad.bind(this)

  //   this.state = {
  //     cantidad: 0
  //   }
  // }

  state = {
    cantidad: 0,
  };

  addCantidad = () => {
    this.setState({ cantidad: this.state.cantidad + 1 });
  };

  removeCantidad = () => {
    this.setState({ cantidad: this.state.cantidad - 1 });
  };

  limpiar = () => {
    this.setState({ cantidad: 0 });
  };

  render() {
    const hasItems = this.state.cantidad > 0;
    const classes = hasItems ? `${frutasStyles["tarjeta-fruta"]} ${frutasStyles["tarjeta-fruta--activa"]}` : frutasStyles["tarjeta-fruta"];

    return (
      <article className={classes}>
        <h1>{this.props.name}</h1>
        <p>{this.props.description}</p>
        <small>Cantidad: {this.state.cantidad}</small>
        <br />
        <br />
        <button className={frutasStyles["button--plus"]} onClick={this.addCantidad}>+</button>
        <button className={frutasStyles["button--cross"]} onClick={this.removeCantidad}>-</button>
        <button onClick={this.limpiar}>Limpiar</button>
      </article>
    );
  }
}

export default TarjetaFruta;
