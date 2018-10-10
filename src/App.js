import React, { Component } from 'react';
/*import Barra from './components/Barra';*/
import BarraComMenu from './components/BarraComMenu';
import Login from './components/Login';
import './App.css';
/*import AppIntro from './components/AppIntro'
import ComponenteImagem from './components/ComponenteImagem';
import ComponenteImagemGato from './components/ComponenteImagemGato';*/


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <BarraComMenu/>
        <Login/>
        </header>
      </div>
    );
  }
}

export default App;

