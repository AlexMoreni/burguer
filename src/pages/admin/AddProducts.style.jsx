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
