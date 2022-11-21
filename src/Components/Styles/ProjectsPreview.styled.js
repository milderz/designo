import styled from "styled-components";

export const StyledProjectsPreview = styled.section`
  height: 64.1rem;
  width: 77%;
  margin: auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2.8rem;
  max-width: 111rem;

  @media screen and (max-width: 1280px) {
    width: 90%;
  }
  @media screen and (max-width: 1080px) {
    height: auto;
    width: 90%;
    grid-template-columns: 1fr;
    grid-auto-rows: 31.1rem;
    grid-template-rows: none;
  }
`;
