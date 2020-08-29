import React from "react";
import "./styles.css";

interface InputProps {
 type: string;
 name:string;
 placeholder: string;
 value: string
};

export const Input:React:FC<InputProps> = ({
    type,
    name,
    placeholder,
    value
}) => {
  return <input type={type} name={name} placeholder={placeholder} value={value}/>;
};
