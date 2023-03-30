import styled from "./styles.module.css";
import plusSvg from "../../assets/plus.svg";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { TodoProps } from "../Todo";
import { v4 as uuid } from "uuid";

type TodoSubmitForm = {
  setTodos: Dispatch<SetStateAction<TodoProps[]>>;
}

function TodoSubmitForm({ setTodos }: TodoSubmitForm) {
  const [title, setTitle] = useState("");
  function changeTitleTextValue(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }
  function handleCreateTodo() {
    if (title.trim() === "")
      return;
    console.log("create todo");
    setTodos(state => [...state, { id: uuid(), title, checked: false }]);
    setTitle("");
  }
  return (
    <form className={styled.container}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={title}
        onChange={(e) => changeTitleTextValue(e)}
      />
      <button type="button" onClick={handleCreateTodo}>
        Criar
        <img src={plusSvg} />
      </button>
    </form>
  );
}

export { TodoSubmitForm };