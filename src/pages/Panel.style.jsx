import styled from "styled-components";

export const Container = styled.section`
  max-width: 100vw;
  min-height: 100vh;
  background-color: var(--color-black);
  padding-top: calc(15vh + 10px);
  display: flex;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerAside = styled.aside`
  width: 25%;
  min-height: 100vh;
  background-color: #b3a0cd;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 480px) {
    width: 100%;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    width: 30%;
  }
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

  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: 2.6rem;
  }
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

  @media (max-width: 480px) {
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
  }
`;
