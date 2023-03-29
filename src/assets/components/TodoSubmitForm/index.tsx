import styled from "./styles.module.css";

function TodoSubmitForm() {
  return (
    <form className={styled.container}>
      <input type="text" />
      <button type="button">
        Criar +
      </button>
    </form>
  );
}

export { TodoSubmitForm };