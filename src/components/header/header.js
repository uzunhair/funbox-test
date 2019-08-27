import React, { Component } from 'react';
import logo from "./logo.svg";

export default class Header extends Component {
  render() {

    return (
      <header className="app__header">
        <img src={logo} className="app__logo" alt="logo" />
        <div className="app__brand">Funbox</div>
      </header>
    )

  }
}