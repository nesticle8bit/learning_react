import React, { Component } from "react";

const Title = (props) => {
  const { uiColor, children } = props;

  const styles = {
    padding: "0.3em",
    color: "#FFF",
    background: uiColor,
    borderRadius: "0.3em",
    textAlign: "center",
    fontSize: "50px",
  };

  return <h1 style={styles}>{children}</h1>;
};

class Destructuracion extends Component {
  state = {
    uiColor: "tomato",
  };

  render() {
    const { uiColor } = this.state;

    return (
      <Title uiColor={uiColor}>
        Julio <em>Poveda 🧙🏼‍♂️</em>
      </Title>
    );
  }
}

export default Destructuracion;
