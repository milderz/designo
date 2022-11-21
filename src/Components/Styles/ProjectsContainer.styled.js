import styled from "styled-components";

export const StyledProjectsContainer = styled.section`
  width: 77.22%;
  margin: 10rem auto 10rem auto;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-gap: 4rem;
  grid-auto-rows: 46.5rem;
  max-width: 111rem;

  @media screen and (max-width: 1280px) {
    width: 90%;
  }
`;
