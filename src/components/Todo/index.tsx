import styled from "./styles.module.css";

function Todo() {
  return (
    <div className={styled.container}>
      <input type="checkbox" className={styled.roundedCheckbox} />
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione debitis suscipit ullam aut voluptates iusto recusandae tenetur repellat ipsam, eum obcaecati saepe?
      </span>
      <button>
        trash
      </button>
    </div>
  );
}

export { Todo };