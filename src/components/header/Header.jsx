import { Navbar } from "../navbar/Navbar";
import { Link } from "../link/Link";
import { StyledHeader } from "./Header.styled";
import Logo from "../../newer.gif";

import { GoSearch } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { Button } from "../button/Button";

export const Header = () => {
  return (
    <div>
      <StyledHeader>
        <Navbar />

        <Link
          className="logo"
          href="/Home"
          icon={<img src={Logo} alt="Mock.Shop" />}
        ></Link>

        <div className="icons">
          <Button icon={<GoSearch />} />
          <Button icon={<IoPersonOutline />} />
          <Button icon={<FiShoppingBag />} />
        </div>
      </StyledHeader>
    </div>
  );
};
