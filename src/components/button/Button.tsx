import { StyledButton } from "./Button.styled";

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  as?: React.ElementType;
  href?: string;
  className?: string;
  fontSize?: string;
}

export const Button = ({
  className,
  onClick,
  children,
  as,
  href,
  fontSize,
}: ButtonProps) => {
  return (
    <StyledButton
      $fontSize={fontSize}
      className={className}
      as={as}
      onClick={onClick}
      to={href}
    >
      <div className="insideBorder">{children}</div>
    </StyledButton>
  );
};
