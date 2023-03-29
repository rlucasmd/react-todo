import styled from "./styles.module.css";

import logoSvg from "../../assets/logo.svg";

function Header() {
  return (
    <header className={styled.container}>
      <img src={logoSvg} alt="Todo em react" />
    </header>
  );
}

export { Header };