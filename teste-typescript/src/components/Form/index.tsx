import React, { Component } from "react";
import "./styles.css";

interface State{
 inputToDo: string,
 inputDescription: string,
 initialDate: number,
 finalDate: number
}

export default class Form extends Component<State> {
   this.state = {
        inputToDo: '',
        inputDescription: '',
        initialDate: '',
        finalDate:''
    }
  componentDidMount() {}

  render() {
    return <h1>hello world</h1>;
  }
};