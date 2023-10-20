import styled from "styled-components";

export const Container = styled.section`
  min-width: 100%;
  min-height: 100vh;
  background-color: var(--color-black);
  padding: 2rem;
  box-sizing: border-box;
`;

export const FieldSearch = styled.form`
  display: flex;
  justify-content: flex-end;
`;

export const Input = styled.input`
  width: 254px;
  height: 50px;
  font-family: var(--font-text);
  font-size: 2.2rem;
  padding-left: 10px;
  border: none;
  outline: none;
  border-radius: 9px 0 0 9px;
  background: #eee;
  box-sizing: border-box;
`;

export const ButtonInput = styled.input`
  width: 154px;
  height: 50px;
  font-family: var(--font-text);
  font-size: 2.2rem;
  color: var(--color-white);
  background: var(--color-orange);
  border: none;
  outline: none;
  border-radius: 0 9px 9px 0;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: var(--color-black);
  }
`;

export const ContainerTitle = styled.div`
  padding-top: 50px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h1`
  font-family: var(--font-emphasis);
  font-size: 5rem;
  color: var(--color-white);
  text-align: center;
  text-transform: uppercase;
  line-height: 88.896%;
  letter-spacing: -1px;
`;

export const ButtonAdd = styled.button`
  width: 50px;
  height: 50px;
  font-family: var(--font-text);
  font-size: 3rem;
  color: var(--color-white);
  background-color: var(--color-purple);
  border: none;
  border-radius: 50%;

  cursor: pointer;

  &:hover {
    color: var(--color-black);
    opacity: 0.9;
  }
`;

export const ContainerCardsProducts = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0 2rem;
  margin-top: 80px;
`;

export const CardProduct = styled.div`
  width: 260px;
  min-height: 288px;
  border-radius: 10px;
  border: 4px solid var(--color-purple);
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
  font-size: 1.6rem;
  color: var(--color-white);
  margin-top: 20px;
  text-align: center;
  text-transform: uppercase;
`;

export const EmphasisName = styled.span`
  color: var(--color-orange);
`;

export const FormAddProduct = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: var(--color-black);
  padding: 40px;
  border-radius: 14px;
  border: 4px solid #d9d9d9;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -42%);
  z-index: 999;
`;

export const LabelFormAddProduct = styled.label`
  font-family: var(--font-emphasis);
  font-size: 2rem;
  color: var(--color-white);
  text-transform: uppercase;
  margin-bottom: 4px;
`;

export const InputFormAddProduct = styled.input`
  width: 100%;
  height: 30px;
  font-family: var(--font-text);
  font-size: 2rem;
  padding: 20px 10px;
  border: none;
  outline: none;
  border-radius: 9px;
  background: #eee;
  box-sizing: border-box;
  display: block;
`;

export const TextAreaFormAddProduct = styled.textarea`
  width: 100%;
  font-family: var(--font-text);
  font-size: 2.2rem;
  padding-left: 10px;
  border: none;
  outline: none;
  border-radius: 9px;
  background: #eee;
  box-sizing: border-box;
  display: block;
  resize: none;
`;

export const SelectFormAddProduct = styled.select`
  width: 100%;
  font-family: var(--font-text);
  font-size: 2.2rem;
  padding-left: 10px;
  border: none;
  outline: none;
  border-radius: 9px;
  background: #eee;
  box-sizing: border-box;
  display: block;
`;

export const ButtonFormAddProduct = styled.button`
  width: 100%;
  font-family: var(--font-emphasis);
  font-size: 1.6rem;
  color: var(--color-black);
  background: var(--color-yellow);
  border-radius: 10px;
  padding: 10px;
  text-transform: uppercase;
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

export const ButtonCloseFormAddProduct = styled.div`
  width: 30px;
  height: 30px;
  font-family: var(--font-text);
  font-size: 2rem;
  font-weight: bold;
  color: var(--color-white);
  background: red;
  border-radius: 50%;
  padding: 10px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  transition: 0.5;
  position: absolute;
  top: -20px;
  right: -15px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: var(--color-black);
  }
`;

export const BackgroundFormAddProduct = styled.div`
  width: 100%;
  height: 150vh;
  background-color: var(--color-black);
  opacity: 0.7;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
`;
