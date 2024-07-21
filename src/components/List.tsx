import { useState } from "react";

type Props = {
  data: string[];
  onSelect?: (element: string) => void;
};

function List({ data, onSelect }: Props) {
  const [index, setIndex] = useState(0);

  const handleClick = (e: number, element: string) => {
    setIndex(e);
    onSelect?.(element);
  };
  return (
    <ul className="list-group">
      {data.map((item, i) => (
        <li
          onClick={() => handleClick(i, item)}
          key={item}
          className={`list-group-item ${index == i ? "active" : ""}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default List;
