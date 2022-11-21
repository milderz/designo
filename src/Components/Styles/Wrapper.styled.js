import styled from "styled-components";

export const StyledWrapper = styled.section`
  width: 77.22%;
  margin: 0 auto 10rem auto;
  display: flex;
  max-width: 111rem;
  @media screen and (max-width: 1280px) {
    width: 90%;
  }
  @media screen and (max-width: 1080px) {
    flex-direction: column;
    gap: 8rem;
  }
  @media screen and (max-width: 680px) {
    margin: 10rem auto 10rem auto;
  }

  div {
    flex-grow: 1;
  }
`;
