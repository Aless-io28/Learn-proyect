import square from "./Tictactoe.module.css";

type Props = {
  win: string;
  reset: () => void;
};

function Modal({ win, reset }: Props) {
  return (
    <>
      <div className={[square.dialog].join(" ")}>
        <div className={[square.dialogContent].join("")}>
          <p>
            <strong>{win !== "Empate" ? "Ganador" : "Empate"}</strong>
          </p>
          <p>{win === "Empate" ? "" : win}</p>
          <button onClick={reset} className={[square.btn].join(" ")}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
