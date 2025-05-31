import { StyledButton } from "./Button.styled";

interface ButtonProps {
  onClick?: () => void;
  icon?: React.ReactNode;
  as?: React.ElementType;
  href?: string;
  className?: string;
}

export const Button = ({ className, onClick, icon, as, href }: ButtonProps) => {
  return (
    <StyledButton className={className} as={as} onClick={onClick} to={href}>
      <div className="insideBorder">{icon}</div>
    </StyledButton>
  );
};
