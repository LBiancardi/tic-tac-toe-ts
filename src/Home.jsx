import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./components/styles/Button";
import { HomeFlex, StyledHome } from "./components/styles/Home.styled";

export default function Home() {
  return (
    <StyledHome /* H1color="#e5ff00" */>
      <img src="./src/assets/neon.png"></img>
      <HomeFlex>
        <Link to="/classic">
          <Button bg={"#ffae00"} color={"#333"}>
            Classic
          </Button>
        </Link>
        <Link to="/crazy">
          <Button bg={"#b10000c5"}>Crazy</Button>
        </Link>
      </HomeFlex>
    </StyledHome>
  );
}
