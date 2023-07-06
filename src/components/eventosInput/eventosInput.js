import React, { Component } from "react";

class EventosInput extends Component {
  inputChange = (event) => {
    console.log(event.target.value);
  };

  render() {
    return (
      <main>
        <input type="text" onChange={this.inputChange} />
      </main>
    );
  }
}

export default EventosInput;
