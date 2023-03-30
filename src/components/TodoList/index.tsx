import { Dispatch, SetStateAction } from "react";
import { Todo, TodoProps } from "../Todo";
import styled from "./styles.module.css";


type TodoListProps = {
  setTodos: Dispatch<SetStateAction<TodoProps[]>>;
  todos: TodoProps[];
}

function TodoList({ todos, setTodos }: TodoListProps) {
  const createdTodosCount = todos.length;
  const completedTodosCount = todos.filter(todo => todo.checked).length;
  return (
    <section className={styled.container}>
      <header>
        <div className={styled.createdTodos}>
          <strong>Tarefas criadas </strong>
          <span>{createdTodosCount}</span>
        </div>
        <div className={styled.completedTodos}>
          <strong>Concluídas </strong>
          <span>{`${completedTodosCount} de ${createdTodosCount}`}</span>
        </div>
      </header>
      <div className={styled.taskList}>
        {
          todos.map((todo) => (
            <Todo
              key={todo.id}
              checked={todo.checked}
              title={todo.title}
              id={todo.id}
              setTodos={setTodos}
              todos={todos}
            />
          ))
        }
      </div>
    </section>
  );
}

export { TodoList };