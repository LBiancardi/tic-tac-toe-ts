import React from "react";
import { StyledPlayerCard } from "./styles/ClassicMode.styled";

export default function PlayerCard({
  img = "player1.png",
  player = "1",
  placeholder = "X",
}) {
  return (
    <StyledPlayerCard>
      <img src={`./src/assets/${img}`} />
      <p>{player}</p>
      <p>{placeholder}</p>
    </StyledPlayerCard>
  );
}
