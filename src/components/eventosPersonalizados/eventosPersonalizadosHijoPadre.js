import React, { Component } from "react";

class EventosPersonalizadosHijoPadrePadreHijo extends Component {
  clickHandler = (e) => {
    this.props.onMyOwnCustomEvent('U have bewitched 🧙🏼‍♂️')
  };

  render() {
    return (
        <section>
            <h3>Child Component</h3>
            <button type="button" onClick={this.clickHandler}>Ver Mensaje</button>
        </section>
    );
  }
}

export default EventosPersonalizadosHijoPadrePadreHijo;
