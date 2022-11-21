import styled from "styled-components";

export const StyledAboutCard = styled.article`
  height: 49.2rem;
  background-color: var(--peach-bg);
  width: 77.22%;
  max-width: 111rem;
  margin: 10rem auto 10rem auto;
  display: flex;
  border-radius: 1.6rem;
  flex-direction: ${({ version }) =>
    version === "primary" ? "row" : "row-reverse"};
  @media screen and (max-width: 1280px) {
    width: 90%;
  }
  @media screen and (max-width: 1080px) {
    flex-direction: column;
    height: 73.4rem;
    border-radius: 1.6rem;
  }

  @media screen and (max-width: 680px) {
    width: 100%;
    border-radius: 0;
    margin: 0;
  }

  .text-content {
    flex: 1;
    padding: 4rem 9rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media screen and (max-width: 680px) {
      padding: 3rem 0;
    }

    h3 {
      color: var(--peach);
      font-size: 4.8rem;
      font-weight: 500;
      @media screen and (max-width: 1080px) {
        text-align: center;
      }

      @media screen and (max-width: 680px) {
        font-size: 3.2rem;
      }
    }

    p {
      color: var(--black);
      font-size: var(--text-sm);
      @media screen and (max-width: 1080px) {
        text-align: center;
      }
      @media screen and (max-width: 680px) {
        width: 80%;
        margin: auto;
        padding: 1.6rem 0;
      }
    }
  }

  .img-content {
    flex: 1;
    background-image: url(${({ bgImg }) => bgImg && bgImg});
    background-position: center;
    background-size: cover;
    border-bottom-left-radius: 1.6rem;
    border-top-left-radius: 1.6rem;
    border-radius: 1.6rem 0 0 1.6rem;
    border-radius: ${({ version }) =>
      version === "primary" ? "1.6rem 0 0 1.6rem" : "0 1.6rem 1.6rem 0"};

    @media screen and (max-width: 1080px) {
      border-radius: 1.6rem 1.6rem 0 0;
    }

    @media screen and (max-width: 680px) {
      border-radius: 0;
      background-image: url(${({ bgImgMobile }) => bgImgMobile && bgImgMobile});
    }
  }
`;
