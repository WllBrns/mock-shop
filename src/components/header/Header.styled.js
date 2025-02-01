import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: white;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 2.25rem 0rem 1.75rem 0rem;
  margin: 0px;
  column-gap: 2rem;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    justify-content: center;
    flex: 1;
    max-width: fit-content;
  }

  .logo {
    padding: .4688rem;
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
    gap: .625rem;
    padding-right: 3.125rem;
  }
  .icons > * {
    width: 1.25rem;
    height: 1.25rem;
  }
`;