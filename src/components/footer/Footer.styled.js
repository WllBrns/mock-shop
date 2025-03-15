import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: black;
  height: 26.625rem;

  h2, p, input, .icons, .currency select {
    color: white;
  }

  h2 {
    margin-top: 4.5rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: .5rem;
    margin-top: 1rem;
  }

  .socials {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    background: none;
    border: solid;
    width: 18.75rem;
    padding: .875rem 1.25rem;
    border-radius: .1875rem;
  }

  .icons {
    margin: 0rem;
  }

  .icons * {
    padding-right: .75rem;
  }

  .currency {
    display: flex;
    flex-direction: column;
    margin-top: 3.5rem;

  }

  .currency select {
    background: none;
    border: solid;
    padding: .875rem .875rem;
    border-radius: .1875rem;
    width: max-content;
  }

`;