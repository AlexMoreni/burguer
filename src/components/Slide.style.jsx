import styled from "styled-components";

export const ContainerSlide = styled.div`
  max-width: 100%;
  overflow: hidden;
  margin: 0 30px;
  padding: 0 30px;
`;

export const CardSlide = styled.div`
  max-width: 550px;
  height: 300px;
  position: relative;
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
`;
