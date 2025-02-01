import { Navbar } from "../navbar/Navbar";
import { Button } from "../button/Button";
import { StyledHeader } from "./Header.styled";
import Logo from "../../newer.gif";

import { GoSearch } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router";

export const Header = () => {
  return (
    <StyledHeader>
      <Navbar />

      <Link className="logo" to="/Home">
        <img src={Logo} alt="Mock.Shop" />
      </Link>

      <div className="icons">
        <Button icon={<GoSearch />} />
        <Button icon={<IoPersonOutline />} />
        <Button icon={<FiShoppingBag />} />
      </div>
    </StyledHeader>
  );
};
