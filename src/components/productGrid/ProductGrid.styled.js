import styled from "styled-components";

export const StyledProductGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 2.5rem;
    overflow: auto;

    @media (max-width: 1100px) {
      grid-template-columns: auto auto;
    }
`;