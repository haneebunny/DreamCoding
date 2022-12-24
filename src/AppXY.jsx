import React, { useEffect, useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [x, setX] = useState();
  const [y, setY] = useState();

  useEffect(() => {}, []);
  const getMouse = (event) => {
    window.addEventListener("mousemove", getMouse);
    setX(event.clientX);
    setY(event.clientY);
  };

  return (
    <div
      className="container"
      onMouseMove={(e) => {
        setX(e.clientX);
        setY(e.clientY);
      }}
    >
      <div
        className="pointer"
        style={{ transform: `translate(${x}px,${y}px)` }}
      />
    </div>
  );
}
