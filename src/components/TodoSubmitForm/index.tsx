import styled from "./styles.module.css";
import plusSvg from "../../assets/plus.svg";

function TodoSubmitForm() {
  return (
    <form className={styled.container}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="button">
        Criar
        <img src={plusSvg} />
      </button>
    </form>
  );
}

export { TodoSubmitForm };