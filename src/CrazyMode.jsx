import { useState } from "react";
import PlayerCard from "./components/PlayerCard";
import BoardSpace from "./components/styles/BoardSpace";
import { StyledClassicMode } from "./components/styles/ClassicMode.styled";
import { checkWinner } from "./helpers/checkWinner";
import { handleBoardChange } from "./helpers/handleBoardChange";

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
  const [spaces, setSpace] = useState(["", "", "", "", "", "", "", "", ""]);
  const [nextMove, setNextMove] = useState(player1.placeholder);
  const [isTheGameOver, setIsTheGameOver] = useState(false);

  const handleSwitchTurns = (
    nextMove,
    placeholder1,
    placeholder2,
    playerTurn
  ) => {
    nextMove !== placeholder1
      ? setNextMove(placeholder1)
      : setNextMove(placeholder2);
    setPlayerTurn(!playerTurn);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginBottom: "0" }}>Crazy mode</h1>
        <p>Exactly the same thing but on a different Route</p>
      </div>
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
      <div
        style={{
          borderRadius: "10px",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          flexWrap: "wrap",
          rowGap: "0.25rem",
          justifyContent: "space-evenly",
          padding: "0.45rem",
          marginTop: "3rem",
        }}
      >
        {spaces.map((space, i) => (
          <BoardSpace
            onClick={(e) => {
              e.target.innerText = nextMove;
              setSpace(handleBoardChange(spaces, i, nextMove));
              handleSwitchTurns(
                nextMove,
                player1.placeholder,
                player2.placeholder,
                playerTurn
              );
              setSpace(checkWinner(spaces, nextMove));
            }}
          >
            {spaces[i]}
          </BoardSpace>
        ))}
      </div>
    </>
  );
};

export default CrazyMode;
