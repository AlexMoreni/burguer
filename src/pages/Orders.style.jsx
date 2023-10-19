import styled from "styled-components";

export const Container = styled.section`
  max-width: 100vw;
  min-height: 100vh;
  background-color: var(--color-black);
  padding-top: calc(15vh + 10px);
  padding-bottom: 50px;
`;

export const TitlePage = styled.h1`
  font-family: var(--font-emphasis);
  font-size: 10rem;
  color: var(--color-white);
  text-align: center;
  text-transform: uppercase;
  margin: 0 auto;
`;

export const ContainerCardsOrders = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CardOrder = styled.div`
  width: 593px;
  height: 418px;
  background-color: #2f2d2e;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  box-sizing: border-box;
`;

export const ContainerCardTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const CardTitle = styled.h2`
  font-family: var(--font-emphasis);
  font-size: 5rem;
  color: var(--color-white);
  margin-left: 45px;
  text-transform: uppercase;
`;

export const ContainerCardItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 20px;
`;

export const CardItems = styled.div`
  font-family: var(--font-emphasis);
  font-size: 2rem;
  color: var(--color-white);
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const CardItemsEmphasis = styled.span`
  color: var(--color-orange);
  text-transform: uppercase;
`;

export const CardItemOrder = styled.div`
  font-family: var(--font-emphasis);
  font-size: 2rem;
  color: var(--color-white);
  display: flex;
  gap: 10px;
`;
