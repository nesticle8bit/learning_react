import React, { Component } from "react";

class InyectandoHTML extends Component {
  state = {
    contenido: `
            <h1>Hola Mundo 🧙🏼‍♂️</h1>
            <p>Esto es un contenido de HTML</p>
            <br>
            <a href='http://google.com'>Ir a Google</a>
        `,
  };

  // Fuentes confiables, si es por el usuario sanitizar la entrada

  render() {
    return (
      <main>
        <div dangerouslySetInnerHTML={{ __html: this.state.contenido }}></div>
      </main>
    );
  }
}

export default InyectandoHTML;
