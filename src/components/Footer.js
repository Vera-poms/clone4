import React from "react";
import "/Users/admin/Documents/web dev/clone4/src/components/Game.css";
import { GAME_STATE_PLAYING } from "../Constants";

const Footer = ({ onNewGameClick, onSuggestClick, gameState }) => {
  const renderButton = () => {
    if (gameState === GAME_STATE_PLAYING) {
      return <button onClick={onSuggestClick}>Suggest</button>;
    }
    return <button onClick={onNewGameClick}>New Game</button>;
  };
  return <div className="panel footer">{renderButton()}</div>;
};

export default Footer;
