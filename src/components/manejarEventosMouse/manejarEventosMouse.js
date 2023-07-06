import React, { Component } from 'react'

const styles = {
    // width: '600px',
    height: '300px',
    background: 'gold',
    padding: '2em',
    boxSizing: 'border-box'
};

class ManejarEventosMouse extends Component {
    state = {
        x: 0,
        y: 0
    };

    mouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }

    render() {
        return (
        <main style={styles} onMouseMove={this.mouseMove}>
            <p>X: {this.state.x}</p>
            <p>Y: {this.state.y}</p>
        </main>
        )
    }
}

export default ManejarEventosMouse;