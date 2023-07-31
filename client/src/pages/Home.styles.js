import { styled } from "styled-components";

export const StyledHome = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 8%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;

    justify-content: center;
  }
`;
