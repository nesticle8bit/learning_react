import React, { Component } from "react";

class OperadorSpreadPasarProps extends Component {
  render() {
    return (
      <main>
        <h2>{this.props.type}</h2>
        <p>{JSON.stringify(this.props, null, 4)}</p>
      </main>
    );
  }
}

export default OperadorSpreadPasarProps;
