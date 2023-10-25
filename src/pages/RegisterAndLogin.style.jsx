import styled from "styled-components";

export const Container = styled.section`
  max-width: 100vw;
  height: 100vh;
  background-image: url(/background-auth.png);
  background-position: center;
  padding-top: calc(15vh + 10px);
  padding-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    padding-top: calc(15vh + 40px);
    height: 80vh;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    height: 70vh;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    height: 70vh;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    height: 90vh;
  }
`;

export const ContainerFields = styled.div`
  width: 90%;
  min-height: 90%;
  background-color: var(--color-black);
  display: flex;

  @media (max-width: 480px) {
    padding: 15px;
    border-radius: 10px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    border-radius: 10px;
  }
`;

export const Img = styled.img`
  @media (max-width: 480px) {
    display: none;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    display: none;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    display: none;
  }
`;

export const ContainerForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

export const MessageInput = styled.label`
  font-family: var(--font-emphasis);
  font-size: 1.4rem;
  color: var(--color-white);
`;

export const Input = styled.input`
  width: 384px;
  font-family: var(--font-text);
  padding: 12px 12px;
  border-radius: 5px;
  border: none;
  margin: 0 auto;
  display: block;

  @media (max-width: 480px) {
    width: 280px;
  }
`;

export const ButtonForm = styled.input`
  width: 410px;
  font-family: var(--font-text);
  background-color: var(--color-purple);
  color: var(--color-white);
  padding: 12px 12px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    color: var(--color-black);
    opacity: 0.9;
  }

  @media (max-width: 480px) {
    width: 86%;
  }
`;

export const ErrorMessage = styled.p`
  font-family: var(--font-text);
  font-size: 2rem;
  color: red;
`;

export const MessageFormAccount = styled.p`
  font-family: var(--font-text);
  font-size: 1.4rem;
  color: var(--color-white);
`;

export const EmphasisFormAccount = styled.span`
  color: var(--color-purple);
`;

export const FieldPassword = styled.div`
  position: relative;
`;

export const EyePassword = styled.span`
  font-size: 2.5rem;
  color: var(--color-purple);
  cursor: pointer;
  position: absolute;
  top: 24px;
  right: 10px;
`;
