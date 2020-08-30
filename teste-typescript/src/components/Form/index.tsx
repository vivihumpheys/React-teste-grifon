import React, { Component } from "react";
import "./styles.css";
import Input from "../Input";

interface Props {}

interface State {
  inputToDo: any;
  inputDescription: any;
  initialDate: any;
  initialTime: any;
  finalDate: any;
  finalTime: any;
}

export default class Form extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      inputToDo: "",
      inputDescription: "",
      initialDate: "",
      initialTime: "",
      finalDate: "",
      finalTime: "",
    };
  }

  handleChange(e:any) {
  
  }

  handleSubmit(e:any) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          onChange={this.handleChange}
          type="text"
          name="inputToDo"
          placeholder="Insira uma tarefa"
          value={this.state.inputToDo}
        />
        <textarea
          onChange={this.handleChange}
          name="inputDescription"
          placeholder="Descreva essa tarefa"
          value={this.state.inputDescription}
        />
        <label htmlFor="initialDate">Data/Hora inicial</label>
        <Input
          onChange={this.handleChange}
          type="date"
          name="initialDate"
          placeholder=""
          value={this.state.initialDate}
        />
        <Input
          onChange={this.handleChange}
          type="time"
          name="initialTime"
          placeholder=""
          value={this.state.initialTime}
        />
        <label htmlFor="finalDate">Data/Hora final</label>
        <Input
          onChange={this.handleChange}
          type="date"
          name="finalDate"
          placeholder=""
          value={this.state.finalDate}
        />
        <Input
          onChange={this.handleChange}
          type="time"
          name="finalTime"
          placeholder=""
          value={this.state.finalTime}
        />
        <button>Adicionar</button>
      </form>
    );
  }
}
