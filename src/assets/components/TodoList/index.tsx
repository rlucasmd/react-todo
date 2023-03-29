import { Todo } from "../Todo";
import styled from "./styles.module.css";


const todoList = [1, 2, 3];

function TodoList() {
  return (
    <section className={styled.container}>
      <header>
        <div>
          <strong>Tarefas criadas </strong>
          <span>0</span>
        </div>
        <div>
          <strong>Concluidas </strong>
          <span>0 de 0</span>
        </div>
      </header>
      {
        todoList.map((todo) => (
          <Todo key={todo} />
        ))
      }
    </section>
  );
}

export { TodoList };