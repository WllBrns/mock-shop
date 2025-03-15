import styled from "styled-components";

export const StyledProductCard = styled.div`
  
  width: (fill)21.25rem;
  height: (hug)26rem;
  padding: .75rem .75rem 2rem .75rem;
  position: relative;
  
  img {
    transition: transform .4s ease-in-out;
  }

  &:hover{
    img{ 
      transform: scale(1.03);
    }
}

  img {
    width: (fill)19.75rem;
    height: 19.75rem;
  }

  .text {
    padding: .625rem 1rem 0rem 1rem;
  }

  .text * {
    margin: 0px;
  }

  .text h3 {
    margin-bottom: 10px;

  }
  
  .text h3::before {
    content: '';
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

  .text p{
    font-weight: 500;
  }
`;