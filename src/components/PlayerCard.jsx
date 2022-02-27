import React from "react";
import { StyledPlayerCard } from "./styles/ClassicMode.styled";

export default function PlayerCard({
  img = "player1.png",
  player = "1",
  placeholder = "X",
  fontColor = "",
  isActive = true,
}) {
  return (
    <StyledPlayerCard
      className={isActive ? "active" : ""}
      fontColor={fontColor}
    >
      <img src={`./src/assets/${img}`} />
      <p>{player}</p>
      <span>{placeholder}</span>
    </StyledPlayerCard>
  );
}
