import React from "react";
import { StyledButton } from "./Button.styled.js";

export const Button = ({ onClick, icon, as, href }) => {
  return (
    <StyledButton as={as} onClick={onClick} to={href}>
      <div className="insideBorder">{icon}</div>
    </StyledButton>
  );
};
