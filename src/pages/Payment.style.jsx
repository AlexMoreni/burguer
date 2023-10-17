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
  margin-top: 40px;
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
  margin-top: 20px;
`;
