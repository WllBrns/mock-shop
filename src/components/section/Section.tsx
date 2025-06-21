import { StyledSection } from "./Section.styled";

interface SectionProps {
  heading: string;
  subHeading: string;
}

export const Section = ({ heading, subHeading }: SectionProps) => {
  return (
    <StyledSection>
      <p>{subHeading}</p>
      <h2>{heading}</h2>
    </StyledSection>
  );
};
