import React, { Component } from "react";
import ReactDOM from "react-dom";

class Portals extends Component {
  styles = {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    opacity: "0.95",
    color: "#fff",
    background: "linear-gradient(to top right, #667eea, #764ba2)",
  };

  titleStyle = {
    fontWeight: "bold",
    fontSize: "1.4em",
  };

  cerrar = () => {
    this.props.toggleModal();
  }

  render() {
    if (!this.props.visible) {
      return;
    }

    return ReactDOM.createPortal(
      <main style={this.styles}>
        <section style={this.titleStyle}>
          <h1>Titulo</h1>
        </section>

        <section>
          <p>Contenido</p>
        </section>

        <button type="button" onClick={this.cerrar}>
            Cerrar
        </button>
      </main>,
      document.getElementById("modal-root")
    );
  }
}

export default Portals;
