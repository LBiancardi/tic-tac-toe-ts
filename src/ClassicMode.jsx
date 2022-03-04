import React, { useState, useEffect } from "react";
import PlayerCard from "./components/PlayerCard";
import BoardSpace from "./components/styles/BoardSpace";
import { StyledClassicMode } from "./components/styles/ClassicMode.styled";
import { checkWinner } from "./helpers/checkWinner";
import { handleBoardChange } from "./helpers/handleBoardChange";
import { resetBoard } from "./helpers/resetBoard";

const player1 = {
  img: "player1.png",
  name: "Player 1",
  placeholder: "X",
  score: 0,
  turn: true,
};

const player2 = {
  img: "player2.png",
  name: "Player 2",
  placeholder: "O",
  score: 0,
  turn: !player1.turn,
};

const ClassicMode = () => {
  const [playerOneTurn, setPlayerOneTurn] = useState(player1.turn);
  const [spaces, setSpace] = useState(["", "", "", "", "", "", "", "", ""]);
  const [nextMove, setNextMove] = useState(player1.placeholder);
  const [isTheGameOver, setIsTheGameOver] = useState(false);

  useEffect(() => {
    (player1.score = 0), (player2.score = 0);
  }, []);

  useEffect(() => {
    setSpace(resetBoard);
    if (isTheGameOver) {
      !playerOneTurn
        ? (alert(`${player1.placeholder} WINS`), (player1.score += 1))
        : (alert(`${player2.placeholder} WINS`), (player2.score += 1));
    }
    setIsTheGameOver(false);
  }, [isTheGameOver]);

  const handleSwitchTurns = (
    nextMove,
    placeholder1,
    placeholder2,
    playerTurn
  ) => {
    nextMove !== placeholder1
      ? setNextMove(placeholder1)
      : setNextMove(placeholder2);
    setPlayerOneTurn(!playerTurn);
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
        <img
          src="/classicMode.png"
          style={{ marginBottom: "1.5rem", minWidth: "250px", width: "30%" }}
        />
      </div>
      <StyledClassicMode>
        <PlayerCard
          fontColor="#e6ff09"
          img={player1.img}
          player={player1.name}
          placeholder={player1.placeholder}
          score={player1.score}
          isActive={playerOneTurn}
        />

        <PlayerCard
          fontColor="#ff3d3d"
          img={player2.img}
          player={player2.name}
          placeholder={player2.placeholder}
          score={player2.score}
          isActive={!playerOneTurn}
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
              e.target.innerText === ""
                ? ((e.target.innerText = nextMove),
                  setSpace(handleBoardChange(spaces, i, nextMove)),
                  handleSwitchTurns(
                    nextMove,
                    player1.placeholder,
                    player2.placeholder,
                    playerOneTurn
                  ))
                : alert("Please select an empty space");
              setIsTheGameOver(checkWinner(spaces, nextMove));
            }}
          >
            {spaces[i]}
          </BoardSpace>
        ))}
      </div>
    </>
  );
};

export default ClassicMode;
