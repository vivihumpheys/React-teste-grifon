import React, { Component } from "react";
import "./styles.css";
import Input from "../Input";
import ToDoList from "../ToDoList";

interface Props {}

interface State {
  inputToDo: any;
  inputDescription: string;
  initialDate: any;
  initialTime: any;
  finalDate: any;
  finalTime: any;
  toDoList: any;
}

export default class Form extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      toDoList: [],
      inputToDo: "",
      inputDescription: "",
      initialDate: "",
      initialTime: "",
      finalDate: "",
      finalTime: "",
    };
  }

  handleChangeToDo(e: any) {
    let value: string = e.target.value;
    this.setState({ inputToDo: value });
  }

  handleChangeDescription(e: any) {
    let value: string = e.target.value;
    this.setState({ inputDescription: value });
  }

  handleChangeInitialDate(e: any) {
    let value: string = e.target.value;
    this.setState({ initialDate: value });
  }

  handleChangeInitialTime(e: any) {
    let value: string = e.target.value;
    this.setState({ initialTime: value });
  }

  handleChangeFinalDate(e: any) {
    let value: string = e.target.value;
    this.setState({ finalDate: value });
  }

  handleChangeFinalTime(e: any) {
    let value: string = e.target.value;
    this.setState({ finalTime: value });
  }

  handleSubmit(e: any) {
    e.preventDefault();
    let inputToDo: string = this.state.inputToDo;
    let newItems: any = this.state.toDoList.concat(inputToDo);
    this.setState({
      inputToDo: "",
      toDoList: newItems,
      inputDescription: "",
      initialDate: "",
      initialTime: "",
      finalDate: "",
      finalTime: "",
    });
  }

  render() {
    const {
      inputToDo,
      inputDescription,
      initialDate,
      initialTime,
      finalDate,
      finalTime,
    } = this.state;
    return (
      <main>
        <form>
          <Input
            onChange={(e: any) => this.handleChangeToDo(e)}
            type="text"
            name="inputToDo"
            placeholder="Insira uma tarefa"
            value={this.state.inputToDo}
          />
          <textarea
            onChange={(e: any) => this.handleChangeDescription(e)}
            name="inputDescription"
            placeholder="Descreva essa tarefa"
            value={this.state.inputDescription}
          />
          <label htmlFor="initialDate">Data/Hora inicial</label>
          <Input
            onChange={(e: any) => this.handleChangeInitialDate(e)}
            type="date"
            name="initialDate"
            placeholder=""
            value={this.state.initialDate}
          />
          <Input
            onChange={(e: any) => this.handleChangeInitialTime(e)}
            type="time"
            name="initialTime"
            placeholder=""
            value={this.state.initialTime}
          />
          <label htmlFor="finalDate">Data/Hora final</label>
          <Input
            onChange={(e: any) => this.handleChangeFinalDate(e)}
            type="date"
            name="finalDate"
            placeholder=""
            value={this.state.finalDate}
          />
          <Input
            onChange={(e: any) => this.handleChangeFinalTime(e)}
            type="time"
            name="finalTime"
            placeholder=""
            value={this.state.finalTime}
          />
          <button type="submit" onSubmit={(e: any) => this.handleSubmit(e)}>
            Adicionar
          </button>
        </form>

        <ul>
          <li>
            <h3>{inputToDo}</h3>
            <p>{inputDescription}</p>
            <h4>{initialDate}</h4>
            <h5>{initialTime}</h5>
            <h4>{finalDate}</h4>
            <h5>{finalTime}</h5>
          </li>
        </ul>

        {/* <ToDoList>
        item:string={inputToDo}
        description = {inputDescription}
        initialDate = {initialDate}
        initialTime = {initialTime}
        finalDate = {finalDate}
        finalTime = {finalTime}
      </ToDoList> */}
      </main>
    );
  }
}
