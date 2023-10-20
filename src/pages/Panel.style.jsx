import styled from "styled-components";

export const Container = styled.section`
  max-width: 100vw;
  min-height: 100vh;
  background-color: var(--color-black);
  padding-top: calc(15vh + 10px);
  display: flex;
  justify-content: space-between;
`;

export const ContainerAside = styled.aside`
  width: 25%;
  min-height: 100vh;
  background-color: #b3a0cd;
  padding: 20px;
  box-sizing: border-box;
`;

export const AsideTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Title = styled.h1`
  font-family: var(--font-emphasis);
  font-size: 3rem;
  color: var(--color-white);
  text-transform: uppercase;
`;

export const AsideButtons = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Buttons = styled.div`
  width: 251px;
  height: 49px;
  font-family: var(--font-text);
  font-size: 2rem;
  border-radius: 10px;
  background: #ffc633;
  padding-left: 10px;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;

  &:hover {
    color: var(--color-white);
    opacity: 0.97;
  }
`;

export const ContainerContent = styled.div`
  width: 75%;
  min-height: 100vh;
  box-sizing: border-box;
`;
