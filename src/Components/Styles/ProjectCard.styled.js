import styled from "styled-components";

export const StyledProjectCard = styled.article`
  display: flex;
  flex-direction: column;

  .thumbnail {
    flex: 2;
    background: url(${({ bg }) => bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 1.6rem 1.6rem 0 0;
  }

  .text-content {
    flex: 1;
    background-color: var(--peach-bg);
    border-radius: 0 0 1.6rem 1.6rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 2.8rem;
    transition: all 0.4s ease;

    h4 {
      font-size: 2rem;
      color: var(--peach);
      transition: color 0.4s ease;
    }

    p {
      font-size: 1.6rem;
      color: var(--black);
      transition: color 0.4s ease;
    }
  }

  :hover {
    cursor: pointer;
    .text-content {
      background-color: var(--peach);
      color: var(--white);

      h4 {
        color: var(--white);
      }

      p {
        color: var(--white);
      }
    }
  }
`;
