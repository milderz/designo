import styled from "styled-components";

export const StyledFooter = styled.footer`
  height: 39.5rem;
  background-color: var(--black);

  margin-top: ${({ offset }) => (offset ? "-7.5rem" : "0")};
  padding-bottom: 7.5rem;
  z-index: 1;

  @media screen and (max-width: 700px) {
    height: 81.1rem;
  }

  .content {
    width: 77%;
    margin: auto;
    padding-top: 7.5rem;
    max-width: 111rem;

    @media screen and (max-width: 1280px) {
      width: 90%;
    }

    img {
      height: 2.4rem;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 7.4rem 0 4.6rem 0;
      border-bottom: 0.1rem solid #7d7b7b;

      @media screen and (max-width: 700px) {
        flex-direction: column;
        padding: 4.4rem 0 0 0;
      }
      nav {
        @media screen and (max-width: 700px) {
          padding: 3.2rem 0;
        }
        ul {
          display: flex;
          justify-content: space-between;
          align-items: center;
          @media screen and (max-width: 700px) {
            flex-direction: column;
          }

          li {
            margin-left: 4.2rem;

            @media screen and (max-width: 700px) {
              margin: 2.2rem 0;
            }
            a {
              font-size: var(--text-sm);
              font-weight: 500;
              color: #7d7b7b;
              transition: all 0.2s ease;
              text-decoration: underline;
              text-decoration-color: transparent;

              :hover {
                text-decoration: underline;
                color: var(--white);
              }
            }
          }
        }
      }
    }

    .footer-info {
      padding: 3.6rem 0 0 0;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      color: var(--white);

      @media screen and (max-width: 700px) {
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
      }

      .address {
        @media screen and (max-width: 700px) {
          padding-bottom: 3.2rem;
        }
      }

      .contact {
        @media screen and (max-width: 700px) {
          padding-bottom: 3.2rem;
        }
      }

      p {
        padding: 0.4rem 0;
        font-size: 1.6rem;
      }
    }

    .social-links {
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 700px) {
        width: 20.9rem;
      }

      li {
        padding-left: 1.6rem;
        @media screen and (max-width: 700px) {
          padding-left: 0;
        }
      }

      svg {
        height: 2.4rem;
        color: var(--peach);
        transition: color 0.4s ease;

        :hover {
          color: var(--white);
        }
      }
    }
  }
`;
