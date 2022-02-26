import styled from "styled-components";

export const Flex = styled.div`
  align-items: center;
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  gap: ${({ columnGap }) => columnGap || 0};

  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
