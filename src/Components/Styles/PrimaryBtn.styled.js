import styled from "styled-components";

export const StyledPrimaryBtn = styled.button`
  cursor: pointer;
  border-radius: 1.1rem;
  border: none;
  z-index: 2;
  position: relative;

  background-color: ${({ version }) =>
    version === "white" ? "var(--white)" : "var(--peach)"};
  min-width: 15.4rem;
  height: 5.8rem;
  font-size: var(--text-sm);
  font-weight: 500;
  transition: all 0.2s ease;
  z-index: 2;
  color: ${({ version }) =>
    version === "white" ? "var(--black)" : "var(--white)"};

  :hover {
    background-color: var(--light-peach);
    color: var(--white);
  }
`;

// locations
// botom txt bl
//
