import { Navbar } from "../navbar/Navbar";
import { Button } from "../button/Button";
import { StyledHeader } from "./Header.styled";
import Logo from "../../newer.gif";

import { GoSearch } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";

export const Header = () => {
  return (
    <StyledHeader>
      <Navbar />

      <h1>
        <Button href="/Home" icon={<img src={Logo} alt="Mock.Shop" />} />
      </h1>

      <div className="icons">
        <Button icon={<GoSearch />} />
        <Button icon={<IoPersonOutline />} />
        <Button icon={<FiShoppingBag />} />
      </div>
    </StyledHeader>
  );
};
