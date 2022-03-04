import React from "react";
import { StyledPlayerCard } from "./styles/ClassicMode.styled";

export default function PlayerCard({
  img = "player1.png",
  player = "1",
  placeholder = "X",
  fontColor = "",
  score = 0,
  isActive = true,
}) {
  return (
    <StyledPlayerCard
      className={isActive ? "active" : ""}
      fontColor={fontColor}
    >
      <img src={`/${img}`} />
      <p>{player}</p>
      <span>{placeholder}</span>
      <div style={{ display: "flex", flexWrap: "nowrap" }}>
        <p>Score: {score}</p>
      </div>
    </StyledPlayerCard>
  );
}
