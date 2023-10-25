import styled from "styled-components";

export const Container = styled.section`
  max-width: 100vw;
  min-height: 100vh;
  background-color: var(--color-black);
  padding-top: calc(15vh + 10px);
  padding-bottom: 50px;
`;

export const ProductsSlide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  gap: 40px;
  padding: 30px 40px 0 40px;
`;

export const SlideTitle = styled.h1`
  font-family: var(--font-emphasis);
  font-size: 10rem;
  color: var(--color-white);
  text-align: center;
  line-height: 88.896%;
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 6rem;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 9rem;
  }
`;

export const SearchField = styled.form`
  width: 100%;
  padding-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media (max-width: 480px) {
    flex-direction: column;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const SearchInput = styled.input`
  width: 477.645px;
  height: 40.8px;
  font-family: var(--font-text);
  font-size: 2rem;
  border-radius: 10px;
  padding: 12px 10px;
  background: var(--color-white);
  outline: none;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 480px) {
    width: 80%;
  }
`;

export const SearchButton = styled.button`
  width: 216.195px;
  height: 70px;
  font-family: var(--font-text);
  font-size: 2rem;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  background: var(--color-yellow);
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25) inset;
  outline: none;
  cursor: pointer;

  &:hover {
    color: var(--color-purple);
  }

  &:active {
    color: var(--color-white);
    opacity: 0.9;
  }
`;

export const MessageError = styled.p`
  font-family: var(--font-emphasis);
  font-size: 4rem;
  color: var(--color-white);
  text-align: center;
  padding-top: 60px;
`;

export const ContainerCardsProducts = styled.ul`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 75px;
  padding: 0 4rem;
  justify-content: center;
  margin-top: 80px;

  @media (max-width: 480px) {
    gap: 30px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    gap: 30px;
  }
`;

export const CardProduct = styled.li`
  width: 228px;
  min-height: 288px;
  border-radius: 10px;
  border: 4px solid #d9d9d9;
  padding: 15px 0;
  background: #2f2d2e;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ImgCardProduct = styled.img`
  max-width: 200px;
  height: 120px;
`;

export const NameCardProduct = styled.h2`
  max-width: 100%;
  font-family: var(--font-emphasis);
  font-size: 2.5rem;
  color: var(--color-white);
  margin-top: 10px;
  text-align: center;
`;

export const DescriptionCardProduct = styled.p`
  max-width: 100%;
  font-family: var(--font-text);
  font-size: 1.3rem;
  color: var(--color-white);
  margin-top: 20px;
  text-align: center;
`;

export const ValueCardProduct = styled.h3`
  font-family: var(--font-emphasis);
  font-size: 2rem;
  color: #eca400;
  margin: 20px 0;
`;

export const ButtonCardProduct = styled.button`
  width: 100%;
  font-family: var(--font-emphasis);
  font-size: 1.6rem;
  color: var(--color-black);
  background: var(--color-yellow);
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  border: none;
  transition: 0.5;

  &:hover {
    background-color: var(--color-purple);
    color: var(--color-white);
  }

  &:active {
    color: var(--color-white);
    opacity: 0.9;
  }
`;

export const MessageQty = styled.p`
  font-family: var(--font-text);
  font-size: 4rem;
  color: var(--color-white);
  text-align: center;
  padding-top: 60px;
`;
