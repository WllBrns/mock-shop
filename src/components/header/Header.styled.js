import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: white;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;

  padding-top: 36px;
  padding-bottom: 28px;
  margin: 0px;
  grid-template-areas: "navigation heading icons";
  grid-template-columns: 1fr auto 1fr;
  column-gap: 2rem;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    justify-content: center;
    flex: 1;
    max-width: fit-content;
  }

  img {
    height: auto;
    width: 120px;
  }

  .icons {
    justify-content: flex-end;
    flex: 1;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-right: 3.125rem;
  }
  .icons > * {
    width: 1.25rem;
    height: 1.25rem;
  }
`;