import styled from "styled-components";

import React from "react";

export const BoardSpace = styled.button`
  border-radius: 10px;
  background-color: #339cff5f;
  border: none;
  height: 8rem;
  font-weight: bolder;
  font-size: 2em;
  max-height: 110px;
  padding: 1rem;
  width: 32%;

  &:hover {
    cursor: pointer;
    opacity: 60%;
  }
`;
export default BoardSpace;
