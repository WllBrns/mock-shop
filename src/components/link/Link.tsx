import { StyledLink } from "./Link.styled";

interface LinkProps {
  href: string;
  icon: React.ReactNode;
  className?: string;
}

export const Link = ({ href, icon, className }: LinkProps) => {
  return (
    <StyledLink className={className} to={href}>
      {icon}
    </StyledLink>
  );
};
