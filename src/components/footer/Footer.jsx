import { StyledFooter } from "./Footer.styled";

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <h2>Stay in the know</h2>
        <input type="email" placeholder="Email" />
        <p>Follow us on social media</p>
      </div>
    </StyledFooter>
  );
};
