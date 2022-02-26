import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "./styles/Header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <img src="./src/assets/sombraLG.png" alt="logo" />
      </Link>
    </StyledHeader>
  );
}
