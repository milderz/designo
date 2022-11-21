import styled from "styled-components";

export const StyledContactForm = styled.form`
  height: 46.7rem;
  background-color: var(--peach);
  width: 77.22%;
  margin: auto;
  display: flex;
  padding: 4rem 8rem;
  border-radius: 1.6rem;
  margin-bottom: 10rem;
  max-width: 111rem;
  background-image: url("assets/contact/desktop/bg-pattern-hero-desktop.svg");
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;

  @media screen and (max-width: 1280px) {
    width: 90%;
  }

  @media screen and (max-width: 1080px) {
    flex-direction: column;
    height: 69.9rem;
    padding: 4rem 4rem;
    background-position: ce;
  }

  @media screen and (max-width: 680px) {
    width: 100%;
    border-radius: 0;
  }

  header {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      font-size: 4rem;
      color: var(--white);
      font-weight: 500;
      padding-bottom: 2.2rem;

      @media screen and (max-width: 680px) {
        text-align: center;
        font-size: 3.2rem;
      }
    }

    p {
      font-size: var(--text-sm);
      color: var(--white);
      width: 40ch;
      @media screen and (max-width: 1080px) {
        width: auto;
      }

      @media screen and (max-width: 680px) {
        text-align: center;
      }
    }
  }

  .form-fields {
    flex: 1;
    display: flex;
    flex-direction: column;
    color: var(--white);

    @media screen and (max-width: 1080px) {
      flex: 2;
    }
    input {
      flex: 1;
      background: none;
      border: none;
      font-size: 1.6rem;
      border-bottom: 0.2rem solid rgba(255, 255, 255, 0.45);
      transition: border 0.2s ease;
      color: var(--white);
      padding: 2rem 0 0 0;

      :focus {
        outline: none;
        border-bottom: 0.2rem solid rgba(255, 255, 255, 1);
      }

      ::placeholder {
        color: var(--white);
      }
    }

    input.empty-input {
      border-bottom: 0.2rem solid #f0ad4e;
    }
    textarea.empty-input {
      border-bottom: 0.2rem solid #f0ad4e;
    }

    textarea {
      flex: 2;
      background: none;
      border: none;
      font-size: 1.6rem;
      border-bottom: 0.2rem solid rgba(255, 255, 255, 0.45);
      transition: border 0.2s ease;
      display: flex;
      align-items: center;
      color: var(--white);
      padding: 2rem 0 0 0;
      resize: none;
      margin-bottom: 3rem;

      :focus {
        outline: none;
        border-bottom: 0.2rem solid rgba(255, 255, 255, 1);
      }

      ::placeholder {
        color: var(--white);
      }
    }
  }

  .sent-message {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    animation: formAnimation 5s ease;

    svg {
      color: var(--white);
      height: 4rem;
    }

    p {
      font-size: 2.6rem;
      width: 15ch;
      text-align: center;
      padding: 2.6rem 0;
      color: var(--white);
    }
  }

  .submit-form {
    cursor: pointer;
    border-radius: 1.1rem;
    border: none;

    background-color: var(--white);
    min-width: 15.4rem;
    height: 5.8rem;
    font-size: var(--text-sm);
    font-weight: 500;
    transition: all 0.2s ease;
    z-index: 2;
    color: var(--black);

    :hover {
      background-color: var(--light-peach);
      color: var(--white);
    }
  }

  @keyframes formAnimation {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }

    90% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`;
