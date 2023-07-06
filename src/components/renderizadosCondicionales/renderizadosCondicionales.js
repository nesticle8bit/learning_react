import React, { Component } from "react";

class RenderizadosCondicionales extends Component {
    render() {
        if(this.props.saludo) {
            return (
                <section>
                    <p>Hola Wizard! 🧙🏼‍♂️, un saludo el día de hoy</p>
                </section>
            );
        }

        return (
            <section>
                <p>No hay saludo para ti 🦉</p>
            </section>
        );
    }
}

export default RenderizadosCondicionales;
