import styled from "styled-components";

export const StyledProductCard = styled.div`
  padding: 0.75rem 0.75rem 2rem 0.75rem;
  position: relative;

  display: flex;
  flex-direction: column;

  img {
    transition: transform 0.4s ease-in-out;
  }

  &:hover {
    img {
      transform: scale(1.03);
    }
  }

  img {
    height: auto;
    width: 100%;
    object-fit: contain;
  }

  .text {
    padding: 0rem 1rem 0rem 1rem;
    display: flex;
    gap: 0.3125rem;
  }

  .text * {
    margin: 0px;
  }

  h3 {
    margin-bottom: 10px;
    padding: 0.625rem 1rem 0rem 1rem;
  }

  .text h3::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .text h3:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .text p {
    font-weight: 500;
  }
`;
