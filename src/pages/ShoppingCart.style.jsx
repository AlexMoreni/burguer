import styled from "styled-components";

export const Container = styled.section`
  max-width: 100vw;
  min-height: 100vh;
  background-color: var(--color-black);
  padding-top: calc(15vh + 10px);
  padding-bottom: 50px;
`;

export const ContainerText = styled.div`
  max-width: 100%;
  text-align: center;
  padding: 2em;
`;

export const TitlePage = styled.h1`
  font-family: var(--font-emphasis);
  font-size: 10rem;
  color: var(--color-white);
  text-align: center;
  text-transform: uppercase;
  line-height: 88.896%;
  padding-top: 40px;
`;
