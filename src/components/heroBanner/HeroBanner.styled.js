import { styled } from "styled-components";
import { StyledButton } from "../button/Button.styled";

export const LeftStyledHeroBanner = styled.div`
    height: 45rem;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;

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
      padding: .75rem 1.5rem;
      gap: .625rem;
      border-radius: 3px;
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
    width: 55%;
  };

  ${StyledButton} {
    border-color: black;
  }
`;