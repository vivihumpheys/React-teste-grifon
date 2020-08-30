import React from "react";
import "./styles.css";

interface Props {
  item: string;
  description: string;
  initialDate: any;
  initialTime: any;
  finalDate: any;
  finalTime: any;
}

const ToDoList: React.FC<Props> = ({
  item,
  description,
  initialDate,
  initialTime,
  finalDate,
  finalTime,
}) => {
  return (
    <ul>
      <li>
        <h3>{item}</h3>
        <p>{description}</p>
        <h4>{initialDate}</h4>
        <h5>{initialTime}</h5>
        <h4>{finalDate}</h4>
        <h5>{finalTime}</h5>
      </li>
    </ul>
  );
};

export default ToDoList;
