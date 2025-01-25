import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: white;
    display: grid;
    padding-top: 36px;
    padding-bottom: 28px;
    margin: 0px;
    grid-template-areas: "navigation heading icons";
    grid-template-columns: 1fr auto 1fr;
    column-gap: 2rem;
    align-items: center;

    h1 {
        font-size: 1.5rem;
    }
    img {
        height: auto;
        width: 120px;
    }
`;