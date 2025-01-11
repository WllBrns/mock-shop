import { StyledButton } from "./Button.styled.js";
import { Link } from "react-router";

export const Button = ({ onClick, href, icon }) => {
  return href ? (
    <StyledButton as={Link} to={href}>
      {icon}
    </StyledButton>
  ) : (
    <StyledButton onClick={onClick}>{icon}</StyledButton>
  );
};
