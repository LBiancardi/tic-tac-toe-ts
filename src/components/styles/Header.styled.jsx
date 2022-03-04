import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  margin: 0.5rem 5%;

  img {
    min-width: 65px;
    width: 5%;
  }

  nav {
    display: flex;
    column-gap: 2rem;
    justify-content: flex-end;
  }

  nav a {
    color: black;
    font-size: 1.3rem;
    font-weight: bolder;
    text-decoration: none;
    transition: 0.5s;
    width: 100%;
  }

  nav a:hover {
    text-decoration: underline;
    opacity: 70%;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    align-items: center;
    margin: 0;
    flex-direction: column;

    img {
      margin: 0 20%;
      width: 60%;
    }

    nav {
      margin: 0;
      justify-content: space-between;
      width: 80%;
    }
  }
`;
