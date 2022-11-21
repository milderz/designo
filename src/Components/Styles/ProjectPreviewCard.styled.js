import styled from "styled-components";

export const StyledProjectPreviewCard = styled.div`
  position: relative;
  background: url(${({ bg }) => bg && bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 1.6rem;
  grid-area: ${({ gridArea }) => gridArea && gridArea};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;

  @media screen and (max-width: 1080px) {
    grid-area: unset;
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 5;
    border-radius: 1.6rem;
    transition: background-color 0.4s ease;
  }

  h3 {
    font-size: 4rem;
    font-weight: 400;
    color: var(--white);
    z-index: 6;
    padding-bottom: 3.2rem;

    @media screen and (max-width: 680px) {
      font-size: 3.2rem;
    }
  }
  a {
    font-size: 1.5rem;
    color: var(--white);
    font-weight: 500;
    letter-spacing: 3px;
    z-index: 6;

    :hover {
      text-decoration: underline;
    }
  }

  :hover:after {
    background-color: rgba(231, 129, 107, 0.8);
  }
`;
