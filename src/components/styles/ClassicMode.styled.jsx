import styled from "styled-components";

export const StyledClassicMode = styled.div`
  column-gap: 2rem;
  display: flex;
  margin: 0 auto;
  width: 50%;
`;

export const StyledPlayerCard = styled.div`
  align-items: center;
  border: 2px solid white;
  border-radius: 10px;
  background-color: #202020a2;
  display: flex;
  padding: 1rem;
  flex-direction: column;

  img {
    background-color: ${({ bg }) => bg || "#333"};
    border-radius: 50px;
    padding: 0.25rem;
    width: 60%;
  }
`;
