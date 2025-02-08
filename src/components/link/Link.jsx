import { StyledLink } from "./Link.styled.js";
import { Link as RouterLink } from "react-router";

export const Link = ({ href, icon }) => {
  return <StyledLink to={href}>{icon}</StyledLink>;
};
