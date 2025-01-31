import { StyledNavbar } from "./Navbar.styled.js";

import { StyledButton } from "../button/Button.styled";
import { NavLink } from "react-router";

const navbarLinks = [
  { href: "collections/men", text: "Men" },
  { href: "collections/women", text: "Women" },
  { href: "collections/unisex", text: "Unisex" },
  { href: "collections", text: "Collections" },
  { href: "blogs/news", text: "News" },
];

export const Navbar = () => {
  const links = navbarLinks.map((link) => (
    <li key={link.href}>
      <StyledButton as={NavLink} to={link.href}>
        {link.text}
      </StyledButton>
    </li>
  ));

  return (
    <StyledNavbar>
      <ul>{links}</ul>
    </StyledNavbar>
  );
};
