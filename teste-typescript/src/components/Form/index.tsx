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

  handleClick(e: any) {
    e.preventDefault();
    const item: object = {
      inputToDo: this.state.inputToDo,
      inputDescription: this.state.inputDescription,
      initialDate: this.state.initialDate,
      initialTime: this.state.initialTime,
      finalDate: this.state.finalDate,
      finalTime: this.state.finalTime,
    };
    
    console.log(item);

    const listaToDo: any = this.state.toDoList;
    listaToDo.push(item);

    console.log(listaToDo);
    console.log(this.state.toDoList);

    this.setState({
      inputToDo: "",
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
      toDoList,
    } = this.state;
    return (
      <main>
        <form className="mainForm-container">
          <Input
            onChange={(e: any) => this.handleChangeToDo(e)}
            type="text"
            name="inputToDo"
            placeholder="Insira uma tarefa"
            value={this.state.inputToDo}
          />
          <textarea
            className="inputForm-textarea"
            onChange={(e: any) => this.handleChangeDescription(e)}
            name="inputDescription"
            placeholder="Descreva essa tarefa"
            value={this.state.inputDescription}
          />
          <div>
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
          </div>
          <div>
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
          </div>
          <button
            className="buttonForm-submit"
            type="submit"
            onClick={(e: any) => this.handleClick(e)}
          >
            Adicionar
          </button>
        </form>

        <div className="toDoList-container--box">
          <ul className="toDoList-container">
            <h2>Minhas Tarefas:</h2>
            {toDoList.map((item: any) => {
              return (
                <li className="toDoList-item">
                  <h3>{item.inputToDo}</h3>
                  <p>{item.inputDescription}</p>
                  <div className="toDoList-item--dateTime">
                    <h4>{item.initialDate}</h4>
                    <h5>{item.initialTime}</h5>
                  </div>
                  <div className="toDoList-item--dateTime">
                    <h4>{item.finalDate}</h4>
                    <h5>{item.finalTime}</h5>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

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
