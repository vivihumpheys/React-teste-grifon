import React, { useEffect, useRef } from "react";
import "./styles.css";
import { useField } from "@unform/core";

const Input = ({ name, ...rest }) => {
  const { defaultValue, fieldName, error, registerField } = useField(name);
    const inputRef = useRef(null);

    useEffect(()=>{
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value'
      })
    }, [fieldName, registerField]);

  return (
    <div>
      <input ref={inputRef} {...rest}/>
      {error && <p>{error}</p> }
    </div>
  )
};

export default Input;
