import React from "react";
import { StyledButton } from "./Button.styled.js";

export const Button = ({ onClick, icon, as }) => {
  return (
    <StyledButton as={as} onClick={onClick}>
      {icon}
    </StyledButton>
  );
};
