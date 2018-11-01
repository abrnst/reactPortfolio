import React, { Component } from 'react';
import './App.css';
import Navv from "./components/Nav/Nav";
import Title from "./components/Title/Title";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

class App extends Component {


  render() {
    return (
      <div className="App">
        <Navv />
        <Title />
        <About />
        <Cards />
        <Footer />

      </div>
    );
  }
}

export default App;
