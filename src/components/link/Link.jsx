import { StyledLink } from "./Link.styled.js";

export const Link = ({ href, icon }) => {
  return <StyledLink to={href}>{icon}</StyledLink>;
};
