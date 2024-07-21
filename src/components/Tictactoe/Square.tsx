import squares from "./Tictactoe.module.css";

type Props = {
  value: string;
  index: number;
  changeShift: () => void;
};

function Square({ value, index, changeShift }: Props) {
  const handleClick = () => {
    changeShift(index);
  };
  return (
    <>
      <div onClick={handleClick} className={[squares.square].join(" ")}>
        {value}
      </div>
    </>
  );
}

export default Square;
