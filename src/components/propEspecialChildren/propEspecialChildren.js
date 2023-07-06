import React, { Component } from "react";

// INFO: Children es lo que hay dentro de la etiqueta del componente
// VER LINEA 23

const Title = (props) => {
  const styles = {
    padding: "0.3em",
    color: "#FFF",
    background: props.uiColor,
    borderRadius: "0.3em",
    textAlign: "center",
    fontSize: "50px",
  };

  return <h1 style={styles}>{props.children}</h1>;
};

class PropEspecialChildren extends Component {
  render() {
    return (
      <Title uiColor="orange">
        Julio <em>Poveda 🧙🏼‍♂️</em>
      </Title>
    );
  }
}

export default PropEspecialChildren;
