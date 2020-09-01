import React, { useRef } from "react";
import "./styles.css";
import { Form } from "@unform/web";
import Input from "../Input";
import * as Yup from "yup";

const MainForm = () => {
  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        toDo: Yup.string()
          .min(5, "Mínimo de 5 caracteres")
          .required("Insira uma tarefa!"),
        description: Yup.string()
          .min(10, "Mínimo de 10 caracteres")
          .required("Insira a descrição dá tarefa!"),
        date: Yup.object().shape({
          initialDate: Yup.date(),
          finalDate: Yup.date(),
        }),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.log(err);
        const errorMessages = {};
        err.inner.forEach(error=>{
            errorMessages[error.path] = error.message;
        })
        formRef.current.setErrors(errorMessages);
      }
    }
  }
  const formRef = useRef(null);

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input placeholder="Título da tarefa" type="text" name="toDo" />
      <Input placeholder="Descreva a tarefa" type="text" name="description" />
      <Input type="date" name="date.initialDate" />
      <Input type="date" name="date.finalDate" />
      <button type="submit">Adicionar</button>
    </Form>
  );
};

export default MainForm;
