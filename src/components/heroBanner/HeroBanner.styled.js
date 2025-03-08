import { styled } from "styled-components";
import { StyledButton } from "../button/Button.styled";

export const LeftStyledHeroBanner = styled.div`
    height: 45rem;
    position: relative;
    display: flex;
    justify-content: center;

    h2 {
      margin: 0px;
    }

    p {
      margin-top: .75rem;
      margin-bottom: 1.25rem;
      gap: .625rem;
    }

    img {
      height: 100%;
    }

    .text {
      position: absolute;
      color: white;
      width: 55%;
      left: 5.3125rem;
      bottom:5.625rem;
    }

    ${StyledButton} {
      border: solid;
      border-color: white;
      border-width: 1px;
      border-radius: 3px;
    }

    .insideBorder{
      border: solid;
      border-color: rgba(0, 0, 0, 0);
      border-width: 1px;
      padding: .75rem 1.5rem;
      border-radius: 2px;
    }
    
    ${StyledButton}:hover {
      .insideBorder {
        border-color: white;
      }
    }
`;

export const CenterStyledHeroBanner = styled(LeftStyledHeroBanner)`
  .text {
    position: absolute;
    color: black;
    top: 13.875rem;
    margin-left: auto;
    margin-right: auto;
    left: 0;  
    right: 0;
    text-align: center;
    width: 70%;
  };

  ${StyledButton} {
    border-color: black;
  }

  ${StyledButton}:hover {
    .insideBorder {
      border-color: black;
    }
  }
`;