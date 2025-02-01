import { StyledNavbar } from "./Navbar.styled.js";

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
      <NavLink
        to={link.href}
        className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
        end={link.text === "Collections"}
      >
        {link.text}
      </NavLink>
    </li>
  ));

  return (
    <StyledNavbar>
      <ul>{links}</ul>
    </StyledNavbar>
  );
};
