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
`;

export const SearchField = styled.form`
  width: 100%;
  padding-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const SearchInput = styled.input`
  width: 477.645px;
  height: 40.8px;
  font-family: var(--font-text);
  font-size: 2rem;
  border-radius: 10px;
  padding: 12px 10px;
  background: var(--color-white);
  border: 5px solid red;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
`;

export const SearchButton = styled.button`
  width: 216.195px;
  height: 70px;
  font-family: var(--font-text);
  font-size: 2rem;
  font-weight: bold;
  border-radius: 10px;
  background: var(--color-yellow);
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25) inset;
  outline: none;
  cursor: pointer;

  &:hover {
    color: var(--color-white);
    opacity: 0.9;
  }
`;
