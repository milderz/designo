import styled from "styled-components";

export const StyledContainer = styled.section`
  width: 77.22%;
  margin: 18.4rem auto 18.4rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  max-width: 111rem;

  @media screen and (max-width: 1280px) {
    width: 90%;
  }

  @media screen and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
