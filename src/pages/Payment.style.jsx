import styled from "styled-components";

export const Container = styled.section`
  max-width: 100vw;
  min-height: 100vh;
  background-color: var(--color-black);
  padding-top: calc(15vh + 10px);
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitlePayment = styled.h1`
  font-family: var(--font-emphasis);
  font-size: 9rem;
  color: var(--color-white);
  text-align: center;
  text-transform: uppercase;
  line-height: 88.896%;
`;

export const ImgPayment = styled.img`
  width: 300px;
  padding: 30px 0;
`;

export const AddressTitle = styled.h3`
  font-family: var(--font-emphasis);
  font-size: 4.7rem;
  color: var(--color-yellow);
  line-height: 88.896%;
  text-transform: uppercase;
`;
