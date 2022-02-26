import React from "react";
import PlayerCard from "./components/PlayerCard";
import { StyledClassicMode } from "./components/styles/ClassicMode.styled";
import { Flex } from "./components/styles/Flex.styled";

export default function ClassicMode() {
  return (
    <StyledClassicMode>
      <PlayerCard img="player1.png" player="Player 1" placeholder="X" />
      <PlayerCard img="player2.png" player="Player 2" placeholder="O" />
    </StyledClassicMode>
  );
}
