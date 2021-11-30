import React, { Component } from "react";
import Component1 from "../components/Component1";
import Component2 from "../components/Component2";
export default class Container extends Component {
  render() {
    return (
      <div>
        <h1>Hola soy el contenedor</h1>
        <Component1 />
        <Component2 />
      </div>
    )
  }
}
