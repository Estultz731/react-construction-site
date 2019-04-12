import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Nav = () => 
(<nav>
  <a className="left" href="#construction">Acme Construction</a>
  <a className="right" href="#social">Social</a>
  <a className="right" href="#contact">Contact</a>
</nav>)

class App extends Component {
  render() {
    return (
      <>
        <Nav />
      </>
    );
  }
}

export default App;
