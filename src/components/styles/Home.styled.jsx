import styled from "styled-components";

export const StyledHome = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: ${({ H1color }) => H1color || "#333"};
  }

  img {
    min-width: 300px;
    width: 50%;
  }

  button {
    font-size: 1.2rem;
  }
`;

export const HomeFlex = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  min-width: 250px;
  width: 35%;
`;
