import styled from "styled-components";

export const StyledNavbar = styled.nav`

justify-content: flex-start;
flex:1;

  nav {
    display: block;
  }
  
  ul {
    list-style: none;
    display: inline-flex;
    padding: 0;
    margin: 0;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    gap: 1.5rem;
  }

  li {
    box-sizing: inherit;
    width: max-content;
    height: max-content;
  }
`;