import React from "react";
import { Button } from "./components/styles/Button";
import { HomeFlex, StyledHome } from "./components/styles/Home.styled";

export default function Home() {
  return (
    <StyledHome /* H1color="#e5ff00" */>
      <img src="./src/assets/neon.png"></img>
      <HomeFlex>
        <Button bg={"#ffae00"} color={"#333"}>
          Classic
        </Button>
        <Button bg={"#b10000c5"}>Crazy</Button>
      </HomeFlex>
    </StyledHome>
  );
}
