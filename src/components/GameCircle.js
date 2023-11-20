import React from "react";
import "/Users/admin/Documents/web dev/clone4/src/components/Game.css";

const GameCircle = ({ id, children, className, onCircleClicked }) => {
  return (
    <div
      className={`gameCircle ${className}`}
      onClick={() => onCircleClicked(id)}
    >
      {children}
    </div>
  );
};

export default GameCircle;
