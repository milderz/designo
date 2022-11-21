import styled from "styled-components";

export const StyledContactBanner = styled.section`
  background-color: var(--peach);
  width: 77.22%;
  height: 29.2rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1.6rem;
  padding: 0 9.6rem;
  position: relative;
  z-index: 3;
  max-width: 111rem;
  background-image: url("assets/shared/desktop/bg-pattern-call-to-action.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 1280px) {
    width: 90%;
  }
  @media screen and (max-width: 1080px) {
    height: 41.1rem;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
  }

  @media screen and (max-width: 900px) {
    padding: 0 3.6rem;
  }

  h3 {
    font-size: 4rem;
    font-weight: 500;
    color: var(--white);
    width: 14ch;
    line-height: 4.8rem;
    @media screen and (max-width: 1080px) {
      width: auto;
    }
    @media screen and (max-width: 900px) {
      font-size: 3.2rem;
    }
  }

  p {
    padding-top: 2.6rem;
    color: var(--white);
    font-size: 1.6rem;
    width: 60ch;
    @media screen and (max-width: 1080px) {
      width: auto;
    }
  }
`;
