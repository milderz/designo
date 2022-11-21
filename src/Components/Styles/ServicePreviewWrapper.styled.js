import styled from "styled-components";

export const StyledServicePreviewWrapper = styled.section`
  width: 77%;
  margin: 0 auto 10rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 30.8rem;
  grid-gap: 2.8rem;
  max-width: 111rem;

  @media screen and (max-width: 1280px) {
    width: 90%;
  }
  @media screen and (max-width: 1080px) {
    width: 90%;
    grid-template-columns: 1fr;
  }
`;
