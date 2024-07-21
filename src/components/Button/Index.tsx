import React from "react";
import styles from "./button.module.css";
import styled from "styled-components";

type btnProps = {
  isLoading?: boolean;
};

const Btn = styled.button<btnProps>`
  margin: 10px;
  background-color: ${(props) => (props.isLoading ? "#fcc" : "#ffa")};
  border-radius: 10px;
  padding: 5px 10px;
`;

type Props = {
  children: React.ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
};

function Button({ children, isLoading, onClick }: Props) {
  const className = ["btns", styles.button, styles.padded].join(" ");
  return (
    <Btn
      onClick={onClick}
      // disabled={isLoading}
      // className={className}
      // className={`btn ${isLoading ? "btn-secondary" : "btn-primary"}`}
      isLoading={isLoading}
    >
      {isLoading ? "Cargando..." : children}
    </Btn>
  );
}

export default Button;
