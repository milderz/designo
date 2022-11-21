import styled from "styled-components";

export const StyledMainContainer = styled.section`
  position: relative;
  background-color: var(--peach);
  width: 77.22%;
  margin: auto;
  border-radius: 1.6rem;
  height: 64.1rem;
  overflow: hidden;
  padding: 15.2rem 0 15.2rem 9.7rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  z-index: 2;
  margin-bottom: 15.8rem;
  max-width: 111rem;

  @media screen and (max-width: 1280px) {
    width: 90%;
    padding-left: 7.51rem;
  }

  @media screen and (max-width: 1080px) {
    width: 90%;
    height: 83.4rem;
    padding: 7.6rem 0 0 0;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 680px) {
    width: 100%;
    border-radius: 0;
    height: 96.5rem;
  }

  h2 {
    font-size: 4.8rem;
    color: var(--white);
    font-weight: 500;
    line-height: 4.8rem;
    width: 20ch;
    z-index: inherit;

    @media screen and (max-width: 680px) {
      width: 90%;
      font-size: 3.2rem;
    }
  }

  p {
    font-size: var(--text-sm);
    color: var(--white);
    width: 50ch;
    z-index: inherit;
    @media screen and (max-width: 1080px) {
      padding: 3.8rem 0 3rem 0;
    }

    @media screen and (max-width: 680px) {
      width: 90%;
    }
  }

  img {
    position: absolute;
    bottom: -250px;
    right: -100px;
    z-index: 1;

    @media screen and (max-width: 1080px) {
      left: 50%;
      bottom: -370px;
      transform: translateX(-50%);
    }
  }
`;
