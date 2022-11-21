import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 15.5rem;
  width: 77.22%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 111rem;

  @media screen and (max-width: 1280px) {
    width: 90%;
  }

  @media screen and (max-width: 680px) {
    height: 7.2rem;
  }

  img {
    height: 2.4rem;
  }
`;

export const StyledNavlinks = styled.nav`
  display: block;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 680px) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-evenly;
      height: 100%;
    }

    li {
      margin-left: 4.2rem;
      @media screen and (max-width: 680px) {
        margin-left: 2.4rem;
      }
      a {
        font-size: var(--text-sm);
        font-weight: 500;
        color: var(--black);
        transition: color 0.2s ease;
        text-decoration: underline;
        text-decoration-color: transparent;
        @media screen and (max-width: 680px) {
          color: var(--white);
          font-size: 2rem;
        }

        :hover {
          text-decoration: underline;
          text-decoration-color: var(--peach);
        }
      }
    }
  }

  @media screen and (max-width: 680px) {
    visibility: ${({ mobileMenu }) => (mobileMenu ? "visible" : "hidden")};
    opacity: ${({ mobileMenu }) => (mobileMenu ? "1" : "0")};
    position: absolute;
    top: 7.2rem;
    left: 0;
    z-index: 3;
    background-color: var(--black);
    height: 24.4rem;
    width: 100%;
    transition: opacity 0.4s ease;
  }
`;
