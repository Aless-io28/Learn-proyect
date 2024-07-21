import { useState } from "react";
import styled from "styled-components";
import follow from "./follow.module.css";
import "./follow.css";

type btnProps = {
  isFollow: boolean;
};

const Btn = styled.button<btnProps>`
  width: ${(props) => (props.isFollow ? "132px" : "auto")};
  height: 30px;
  background-color: #fff;
  border-radius: 10px;
  padding: 0px ${(props) => (props.isFollow ? "10px" : "20px")};
  border: 1px solid #000;
  overflow: hidden;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.isFollow ? "#ffe1e1" : "#e1e1ff")};
  }
`;

type Props = {
  children: React.ReactNode;
  userName: string;
};

function Follow({ children, userName }: Props) {
  const [isFollow, setIsFollow] = useState(false);
  const handleClick = () => {
    setIsFollow(!isFollow);
  };

  return (
    <div className={[follow.contentFollow].join(" ")}>
      <div className={[follow.userFollow].join(" ")}>
        <img
          className={[follow.img].join(" ")}
          src={`https://unavatar.io/${userName}`}
          alt=""
        />
        <div>
          <h6>{children}</h6>
          <p>@{userName}</p>
        </div>
      </div>
      <Btn
        className={`${isFollow ? "following" : ""}`}
        onClick={handleClick}
        isFollow={isFollow}
      >
        {isFollow ? "Siguiendo" : "Seguir"}
      </Btn>
    </div>
  );
}

export default Follow;
