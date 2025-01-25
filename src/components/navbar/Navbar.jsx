import { StyledButton } from "../button/Button.styled";
import { StyledNavbar } from "./Navbar.styled.js";
import { Link } from "react-router";

export const Navbar = ({ links }) => {
  const navbarLinks = links.map((link) => (
    <li key={link.href}>
      <StyledButton as={Link} to={link.href}>
        {link.text}
      </StyledButton>
    </li>
  ));

  return (
    <StyledNavbar>
      <ul>{navbarLinks}</ul>
    </StyledNavbar>
  );
};
