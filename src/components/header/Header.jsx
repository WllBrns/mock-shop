import { Navbar } from "../navbar/Navbar";
import { Button } from "../button/Button";
import { StyledHeader } from "./Header.styled";
import Logo from "../../newer.gif";

import { GoSearch } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";

const navbarLinks = [
  { href: "/collections/men", text: "Men" },
  { href: "/collections/women", text: "Women" },
  { href: "/collections/unisex", text: "Unisex" },
  { href: "/collections", text: "Collections" },
  { href: "/blogs/news", text: "News" },
];

export const Header = () => {
  return (
    <StyledHeader>
      <Navbar links={navbarLinks} />
      <h1>
        <Button href="/Home" icon={<img src={Logo} alt="Mock.Shop" />} />
      </h1>
      <div>
        <Button icon={<GoSearch />} />
        <Button icon={<IoPersonOutline />} />
        <Button icon={<FiShoppingBag />} />
      </div>
    </StyledHeader>
  );
};
