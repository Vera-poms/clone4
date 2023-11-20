import React from "react";
import "/Users/admin/Documents/web dev/clone4/src/components/Game.css";
import {
  GAME_STATE_PLAYING,
  GAME_STATE_WIN,
  GAME_STATE_DRAW,
} from "../Constants";

const Header = ({ gameState, currentPlayer, winner }) => {
  const renderLabel = () => {
    switch (gameState) {
      case GAME_STATE_PLAYING:
        return <div>Player {currentPlayer} Turn</div>;
      case GAME_STATE_WIN:
        return <div>Player {winner} Wins!</div>;
      case GAME_STATE_DRAW:
        return <div>Game Drawn!</div>;
      default:
    }
  };

  return (
    <div className="panel header">
      <div className="header-text">{renderLabel()}</div>
    </div>
  );
};

export default Header;
