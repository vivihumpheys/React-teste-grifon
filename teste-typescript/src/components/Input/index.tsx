import React, { ReactNode } from "react";
import "./styles.css";

interface Props {
  type: string;
  name: string;
  placeholder: string;
  value: undefined;
  onChange: any
}

const Input: React.FC<Props> = ({ type, name, placeholder, value, onChange }) => {
  return (
    <input onChange={onChange} type={type} name={name} placeholder={placeholder} value={value} />
  );
};

export default Input;
