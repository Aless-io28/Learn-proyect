import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface CardBodyProps {
  title: string;
  text?: string;
}

function Card(props: Props) {
  const { children } = props;
  return (
    <div className="card" style={{ width: "400px" }}>
      <div className="card-body">{children}</div>
    </div>
  );
}

function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}

export default Card;
