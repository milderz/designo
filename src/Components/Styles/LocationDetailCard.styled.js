import styled from "styled-components";

export const StyledLocationDetailCard = styled.article`
  height: 32.6rem;
  display: flex;
  flex-direction: ${({ versionPrimary }) =>
    versionPrimary ? "row" : "row-reverse"};
  gap: 3rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 975px) {
    flex-direction: column-reverse;
    height: 65.2rem;
  }

  @media screen and (max-width: 680px) {
    gap: 0;
  }

  .text-content {
    flex: 2;
    background-color: var(--peach-bg);
    border-radius: 1.6rem;
    background-image: url("assets/shared/desktop/bg-pattern-two-circles.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 8rem 0 8rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 975px) {
      padding: 4rem 0 4rem 2rem;
      align-items: center;
    }

    @media screen and (max-width: 680px) {
      border-radius: 0;
      padding: 4rem 0 4rem 0rem;
    }

    h4 {
      font-size: 4rem;

      color: var(--peach);
      font-weight: 500;

      @media screen and (max-width: 680px) {
        font-size: 3.2rem;
      }
    }

    p {
      font-size: 1.6rem;
    }

    p:nth-child(1) {
      font-weight: 600;
    }

    .location-details {
      display: flex;

      @media screen and (max-width: 975px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .address {
        padding-right: 8rem;

        @media screen and (max-width: 975px) {
          padding-bottom: 4rem;
          padding-right: 0;
        }
      }
    }
  }

  .location-img {
    flex: 1.5;
    background: url(${({ locationImage }) => locationImage && locationImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 1.6rem;

    @media screen and (max-width: 680px) {
      border-radius: 0;
    }
  }
`;
