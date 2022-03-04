import styled from "styled-components";

export const StyledClassicMode = styled.div`
  column-gap: 2rem;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  width: 100%;
`;

export const StyledPlayerCard = styled.div`
  align-items: center;
  background-color: #202020a2;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  min-width: 110px;
  width: 18%;

  img {
    background-color: ${({ bg }) => bg || "#333"};
    border-radius: 50px;
    padding: 0.25rem;
    width: 60%;
  }

  p,
  span {
    color: ${({ fontColor }) => fontColor || "#fefefe"};
    font-weight: bolder;
    font-size: 1.2rem;
  }

  .active {
  }
`;
