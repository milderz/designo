import styled from "styled-components";

export const StyledLocationCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .location-name {
    font-size: 2rem;
    letter-spacing: 3px;
    font-weight: 500;
    padding-bottom: 2rem;
  }

  .location-img {
    position: relative;
  }

  .small-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform: rotate(90deg);
    transform-origin: top;
  }
`;
