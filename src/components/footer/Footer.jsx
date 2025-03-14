import { StyledFooter } from "./Footer.styled";

import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <h2>Stay in the know</h2>
        <input type="email" placeholder="Email" />
        <p>Follow us on social media</p>
        <p className="icons">
          <FaTwitter />
          <FaFacebookSquare />
          <FaPinterest />
          <FaInstagram />
          <FaTiktok />
          <FaTumblr />
          <FaYoutube />
        </p>
      </div>
    </StyledFooter>
  );
};
