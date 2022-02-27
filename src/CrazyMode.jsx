import { useState } from "react";
import PlayerCard from "./components/PlayerCard";
import { StyledClassicMode } from "./components/styles/ClassicMode.styled";

const player1 = {
  img: "player1.png",
  name: "Player 1",
  placeholder: "X",
  turn: true,
};

const player2 = {
  img: "player2.png",
  name: "Player 2",
  placeholder: "O",
  turn: false,
};

const CrazyMode = () => {
  const [playerTurn, setPlayerTurn] = useState(player1.turn);
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [isTheGameOver, setIsTheGameOver] = useState(false);

  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        Crazy mode
      </h1>
      <StyledClassicMode>
        <PlayerCard
          fontColor="#e6ff09"
          img={player1.img}
          player={player1.name}
          placeholder={player1.placeholder}
          isActive={playerTurn}
        />
        <PlayerCard
          fontColor="#ff3d3d"
          img={player2.img}
          player={player2.name}
          placeholder={player2.placeholder}
          isActive={!playerTurn}
        />
      </StyledClassicMode>
      <button onClick={() => setPlayerTurn(!playerTurn)}>
        Switch players turn
      </button>
    </>
  );
};

export default CrazyMode;
