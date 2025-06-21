import styled from "styled-components";

export const StyledButton = styled.button<{ $fontSize?: string }>`
  background-color: transparent;
  border: none;
  color: inherit;
  padding: 0rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: ${({ $fontSize }) => {
    if ($fontSize) return $fontSize + "px";
    else return "16px";
  }};
  margin: 0rem;
  cursor: pointer;
`;
