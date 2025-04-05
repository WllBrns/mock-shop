import styled from "styled-components";

export const StyledProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    max-width: 1100px;
    width: 100%;

    @media (max-width: 1100px) {
        display:flex;
        flex-direction: column;
        align-items: center;
    }
`;