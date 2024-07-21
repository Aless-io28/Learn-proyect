import { useState, useEffect } from "react";
import styled from "styled-components";
import mouse from "./mouse.module.css";

type divProps = {
  position: { x: number; y: number };
  enabled: boolean;
};

const Moved = styled.div<divProps>`
  position: absolute;
  background-color: ${(props) => (props.enabled ? "#00000044" : "#00000000")};
  border: 1px solid ${(props) => (props.enabled ? "#000" : "#00000000")};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  top: ${(props) => props.position.y + "px"};
  left: ${(props) => props.position.x + "px"};
  pointer-events: none;
  cursor: none;
`;

function Mouse() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClick = () => {
    setEnabled(!enabled);
  };

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("mousemove", handleMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, [enabled]);

  return (
    <>
      <div style={{ position: "fixed", top: 10, right: 10 }}>
        <button onClick={handleClick} className={[mouse.btn].join(" ")}>
          {enabled ? "on" : "off"}
        </button>
      </div>
      <Moved enabled={enabled} position={position}></Moved>
    </>
  );
}

export default Mouse;
