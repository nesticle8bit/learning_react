import React from "react";

// import TarjetaFruta from "./components/tarjetaFruta";
// import OperadorSpreadPasarProps from "./components/operadorSpreadPasarProps";
// import ManejarEventosMouse from "./components/manejarEventosMouse";
// import EventosInput from './components/eventosInput';
// import EventosPersonalizadosHijoPadrePadreHijo from "./components/eventosPersonalizados";
// import RenderizadosCondicionales from "./components/renderizadosCondicionales";
// import InyectandoHTML from "./components/inyectandoHTML/inyectandoHTML";
// import PropEspecialChildren from "./components/propEspecialChildren";
// import Destructuracion from "./components/destructuracion";
// import ElementosSinEtiquetasConFragments from "./components/elementosSinEtiquetasConFragments";
// import Portals from "./components/portals";
import Profile from "./components/datosDeEntradaConPropTypes";

// const animal = {
//   raza: "Otros",
//   edad: 5,
// };

class App extends React.Component {
  // state = {
  //   name: "",
  // };

  state = {
    modalVisible: false,
  };

  manageMyOwnCustomEvent = (name) => {
    this.setState({ name });
  };

  toggleModal = () => {
    const value = this.state.modalVisible;
    this.setState({ modalVisible: !value });
  };

  render() {
    // <div>
    //   <TarjetaFruta name="🍉 Sandia" />
    //   <TarjetaFruta name="🍐 Pera" />
    //   <TarjetaFruta name="🍊 Naranja" />
    //   <TarjetaFruta name="🍍 Piña" />
    // </div>
    // <main>
    //   <OperadorSpreadPasarProps type="Gato 😺" name="Garfield" {...animal} />
    // </main>
    // <ManejarEventosMouse />
    // <EventosInput />

    // return (
    //   <main>
    //     <EventosPersonalizadosHijoPadrePadreHijo onMyOwnCustomEvent={this.manageMyOwnCustomEvent} />
    //     <p><strong>Parent:</strong> { this.state.name }</p>
    //   </main>
    // );

    // return (
    //   <main>
    //     <RenderizadosCondicionales saludo={true} />
    //   </main>
    // );

    // return <InyectandoHTML />;

    // return <PropEspecialChildren />;

    // return <Destructuracion />;

    // return <ElementosSinEtiquetasConFragments />;

    // return (
    //   <main>
    //     <button type="button" onClick={this.toggleModal}>
    //       Abrir Modal
    //     </button>
    //     <Portals visible={this.state.modalVisible} toggleModal={this.toggleModal} />
    //   </main>
    // );

    return <Profile name={'Julio'} lastName='Poveda' bio='fullstack developer' email='jjpoveda92@gmail.com' />;
  }
}

export default App;
