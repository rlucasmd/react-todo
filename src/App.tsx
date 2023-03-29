import { Header } from "./assets/components/Header";
import styled from "./App.module.css";
import { TodoList } from "./assets/components/TodoList";
import { useState } from "react";
import { TodoSubmitForm } from "./assets/components/TodoSubmitForm";

function App() {
  const [todos, setTodos] = useState("");
  return (
    <div className={styled.App}>
      <Header />
      <div className={styled.wrapper}>
        <TodoSubmitForm />
        <TodoList />
      </div>
    </div>
  );
}

export { App };
