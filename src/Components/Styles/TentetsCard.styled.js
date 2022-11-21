import styled from "styled-components";

export const StyledTenetsCard = styled.div`
  text-align: center;

  h4 {
    font-size: 2rem;
    letter-spacing: 3px;
    font-weight: 500;
    padding-bottom: 4.4rem;

    @media screen and (max-width: 1080px) {
      padding-bottom: 2.4rem;
    }
  }

  p {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 1080px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    text-align: left;

    .text-container {
      padding-left: 4.4rem;
    }
  }

  @media screen and (max-width: 730px) {
    flex-direction: column;
    text-align: center;

    .text-container {
      padding-left: 0;
    }
  }
`;
