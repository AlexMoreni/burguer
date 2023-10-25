import styled from "styled-components";

export const ContainerSlide = styled.div`
  max-width: 100%;
  overflow: hidden;
  margin: 0 30px;
  padding: 0;
`;

export const CardSlide = styled.div`
  max-width: 550px;
  height: 300px;
  position: relative;

  @media (max-width: 480px) {
    height: 200px;
  }
`;

export const ImgSlide = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextSlide = styled.p`
  max-width: 386px;
  font-family: var(--font-text);
  font-size: 3rem;
  color: var(--color-white);
  background-color: var(--color-black);
  padding: 2rem;
  border-radius: 10px;
  font-weight: bold;
  position: absolute;
  left: 10px;
  bottom: 10px;

  @media (max-width: 480px) {
    display: none;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    max-width: 220px;
    font-size: 2rem;
    left: 5px;
    padding: 10px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    max-width: 280px;
    font-size: 2.6rem;
    left: 5px;
    padding: 10px;
  }
`;
