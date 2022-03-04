import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { StyledHeader } from "./styles/Header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <img src="/sombraLG.png" alt="logo" />
      </Link>
      <nav>
        <Link to="/">
          <p>
            <FaHome />
          </p>
        </Link>
        <Link to="/classic">
          <p>classic</p>
        </Link>
        <Link to="/crazy">
          <p>crazy</p>
        </Link>
      </nav>
    </StyledHeader>
  );
}
