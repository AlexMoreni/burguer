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

export const NoneAddress = styled.h1`
  font-family: var(--font-emphasis);
  font-size: 3rem;
  color: var(--color-white);
  text-align: center;
  text-transform: uppercase;
  line-height: 88.896%;
  padding-top: 80px;
`;

export const ButtonConfirm = styled.button`
  font-family: var(--font-emphasis);
  font-size: 3rem;
  color: var(--color-white);
  background-color: #3fb43d;
  margin-top: 80px;
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

export const FormAddAddress = styled.form`
  width: 500px;
  background-color: #141414;
  padding: 30px;
  margin: 40px 0;
  border: 3px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border: 3px solid #fff;
`;

export const TitleForm = styled.h1`
  font-family: var(--font-emphasis);
  font-size: 3rem;
  color: var(--color-white);
  text-align: center;
  text-transform: uppercase;
  line-height: 88.896%;
`;

export const LabelForm = styled.label`
  font-family: var(--font-emphasis);
  font-size: 1.6rem;
  color: var(--color-white);
  margin: 0 auto;
  text-transform: uppercase;
`;

export const InputFormAdd = styled.input`
  width: 90%;
  height: 30px;
  font-family: var(--font-text);
  font-size: 2rem;
  display: block;
  outline: none;
  padding-left: 10px;
`;

export const ButtonAddAddress = styled.input`
  width: 40%;
  font-size: 3rem;
  font-family: var(--font-text);
  color: var(--color-white);
  background-color: var(--color-purple);
  padding: 2px;
  border-radius: 14px;
  text-transform: uppercase;
  margin: 0 auto;
  border: none;
  cursor: pointer;
`;

export const ButtonHiddenForm = styled.button`
  width: 250px;
  font-size: 2rem;
  font-family: var(--font-text);
  color: var(--color-white);
  background-color: var(--color-purple);
  padding: 2px;
  border-radius: 14px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  margin: 20px 0;

  &:hover {
    background-color: #eca400;
  }

  &:active {
    color: #eca400;
    opacity: 0.9;
  }
`;

export const ContainerCardsAddress = styled.ul`
  padding-top: 20px;
`;

export const CardAddress = styled.li`
  width: 593.478px;
  height: 225px;
  border-radius: 10px;
  background: #2f2d2e;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  border: 2.5px solid var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 15px;
  cursor: pointer;
`;

export const TitleCardAddress = styled.h1`
  font-family: var(--font-emphasis);
  font-size: 3rem;
  text-transform: uppercase;
`;

export const TextCardAddress = styled.p`
  max-width: 100%;
  font-size: 1.6rem;
  font-family: var(--font-text);
  color: var(--color-white);
`;

export const EmphasisCardAddress = styled.span`
  color: var(--color-orange);
  text-transform: uppercase;
  font-weight: bold;
`;
