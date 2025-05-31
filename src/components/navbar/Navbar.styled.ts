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
    padding-left: 3.125rem;
    gap: 1.5rem;
  }

  li {
    box-sizing: inherit;
    width: max-content;
    height: max-content;
  }

  .nav-link {
    border-width: 0px;
    border-color:rgba(0, 0, 0, 0);
    border-style: solid;
    border-bottom-width: 1px;
    text-decoration: none;
    cursor: pointer;
    color: black;
  }

  .nav-link.active {
    border-bottom-width: 1px;
    border-color:black;
  }

  .nav-link:hover {
    border-bottom-width: 1px;
    border-color:black;
  }

  .nav-link.active:hover {
    border-bottom-width: 2px;
    border-color:black;
  }
`;