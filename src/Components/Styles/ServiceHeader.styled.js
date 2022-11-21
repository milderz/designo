import styled from "styled-components";

export const StyledServiceHeader = styled.header`
  background-color: var(--peach);
  width: 77.22%;
  margin: auto;
  height: 29.2rem;
  border-radius: 1.6rem;
  max-width: 111rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("assets/web-design/desktop/bg-pattern-intro-web.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  h3 {
    font-size: 4rem;
    font-weight: 500;
    color: var(--white);
    text-align: center;
    padding-bottom: 2rem;
    @media screen and (max-width: 680px) {
      font-size: 3.2rem;
    }
  }

  p {
    font-size: 1.6rem;

    color: var(--white);
    text-align: center;
    width: 48ch;

    @media screen and (max-width: 680px) {
      width: 80%;
    }
  }

  @media screen and (max-width: 1280px) {
    width: 90%;
  }
  @media screen and (max-width: 680px) {
    width: 100%;
    border-radius: 0;
  }
`;
