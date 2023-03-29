import { Header } from "./components/Header";
import styled from "./App.module.css";
import { TodoList } from "./components/TodoList";
import { useState } from "react";
import { TodoSubmitForm } from "./components/TodoSubmitForm";

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
