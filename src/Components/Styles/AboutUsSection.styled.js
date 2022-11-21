import styled from "styled-components";

export const StyledAboutUsSection = styled.section`
  background-color: var(--peach);
  width: 77.22%;
  margin: auto;
  border-radius: 1.6rem;
  display: flex;
  height: 34.6rem;
  max-width: 111rem;

  position: relative;
  display: flex;

  @media screen and (max-width: 1280px) {
    width: 90%;
  }
  @media screen and (max-width: 1080px) {
    height: 63.2rem;
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 680px) {
    width: 100%;
    border-radius: 0;
  }

  .text-content {
    flex: 1;

    padding: 6.2rem 3.2rem 6.2rem 9.7rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    @media screen and (max-width: 1080px) {
      padding: 3rem 0;
      @media screen and (max-width: 1080px) {
        justify-content: center;
      }
    }
  }

  h3 {
    font-size: 4.8rem;
    color: var(--white);
    font-weight: 500;
    @media screen and (max-width: 1080px) {
      text-align: center;
      width: 100%;
    }
    @media screen and (max-width: 680px) {
      font-size: 3.2rem;
      padding-bottom: 3.2rem;
    }
  }

  p {
    font-size: var(--text-sm);
    color: var(--white);
    width: 53ch;
    @media screen and (max-width: 1080px) {
      width: 80%;
      margin: auto;
      text-align: center;
    }
  }

  .image-container {
    flex: 1;

    border-top-right-radius: 1.6rem;
    border-bottom-right-radius: 1.6rem;
    background-image: url("/assets/about/desktop/image-about-hero.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 1080px) {
      border-radius: 1.6rem 1.6rem 0 0;

      background-image: url("/assets/about/tablet/image-about-hero.jpg");
    }
    @media screen and (max-width: 680px) {
      border-radius: 0;
    }
  }
`;
