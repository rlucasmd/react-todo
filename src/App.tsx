import { Header } from "./components/Header";
import styled from "./App.module.css";
import { TodoList } from "./components/TodoList";
import { useState } from "react";
import { TodoSubmitForm } from "./components/TodoSubmitForm";
import { TodoProps } from "./components/Todo";

function App() {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  return (
    <div className={styled.App}>
      <Header />
      <div className={styled.wrapper}>
        <TodoSubmitForm
          setTodos={setTodos}
        />
        <TodoList
          setTodos={setTodos}
          todos={todos}
        />
      </div>
    </div>
  );
}

export { App };
