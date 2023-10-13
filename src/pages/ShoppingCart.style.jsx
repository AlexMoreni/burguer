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

export const ContainerItems = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  gap: 60px;
`;

export const CardCartShopping = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const ContainerTextCardCart = styled.div`
  width: 593.478px;
  height: 225px;
  border-radius: 10px;
  background: #2f2d2e;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  display: flex;
  align-items: center;
  position: relative;
`;

export const ImgCartShopping = styled.img`
  max-width: 200px;
  height: 170px;
`;

export const InfoCardCartShopping = styled.div`
  max-height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 8px;
  margin: 0 auto;
`;

export const TitleCardCartShopping = styled.h2`
  font-family: var(--font-emphasis);
  font-size: 4rem;
  color: var(--color-white);
`;

export const DescriptionCardCartShopping = styled.p`
  font-family: var(--font-text);
  font-size: 2.4rem;
  color: var(--color-white);
  margin-top: 35px;
`;

export const ButtonTrash = styled.button`
  font-size: 20px;
  color: var(--color-white);
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;

  &:hover {
    color: var(--color-purple);
  }
`;

export const ValueCardCartShopping = styled.h3`
  font-family: var(--font-text);
  font-size: 5rem;
  color: var(--color-white);
`;

export const ContainerPay = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const TextPay = styled.h4`
  font-family: var(--font-emphasis);
  font-size: 5rem;
  color: var(--color-white);
`;

export const ValuePay = styled.span`
  color: #eca400;
`;

export const ButtonPay = styled.button`
  font-family: var(--font-emphasis);
  font-size: 3rem;
  color: var(--color-white);
  background-color: #3fb43d;
  border-radius: 10px;
  border: none;
  padding: 10px 20px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: #eca400;
  }

  &:active {
    color: #eca400;
    opacity: 0.9;
  }
`;

export const CartShoppingMessage = styled.p`
  max-width: 60%;
  font-family: var(--font-emphasis);
  font-size: 3rem;
  color: var(--color-white);
  text-align: center;
  text-transform: uppercase;
  padding-top: 50px;
`;
