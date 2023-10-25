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

  @media (max-width: 480px) {
    margin: 0 auto;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin: 0 auto;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    margin: 0 auto;
  }
`;

export const ContainerCardsClients = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0 2rem;
  margin-top: 80px;

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 0 1rem;
    gap: 25px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    padding: 0;
    gap: 25px;
  }
`;

export const CardClients = styled.div`
  width: 368px;
  min-height: 450px;
  border-radius: 20px;
  padding: 15px 0;
  background: #fff;
  box-shadow: 0px 0px 1.10507px 0px rgba(0, 0, 0, 0.04),
    0px 4.42029px 8.84058px 0px rgba(0, 0, 0, 0.04),
    0px 17.68116px 26.52174px 0px rgba(0, 0, 0, 0.04),
    0px 26.52174px 35.36232px 0px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 18px;
  position: relative;

  @media (max-width: 480px) {
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;
    margin: 0 auto;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 348px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    width: 318px;
  }
`;

export const ImgClient = styled.img`
  width: 200px;
  padding: 1rem;
  border: 6px solid var(--color-black);
  border-radius: 50%;
`;

export const TextCardClient = styled.p`
  font-family: Poppins;
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--color-black);
  text-align: center;
`;

export const EmphasisCardClient = styled.span`
  color: var(--color-orange);
  text-transform: uppercase;
`;

export const ContainerStatusCard = styled.form`
  font-family: Poppins;
  font-size: 2.2rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #4d4da1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const SelectStatusClients = styled.select`
  border-radius: 5px;
  border: 2px solid var(--color-purple);
  padding: 4px;
`;

export const ButtonAttStautsClient = styled.button`
  width: 154px;
  height: 42.739px;
  font-family: var(--font-emphasis);
  text-transform: uppercase;
  background: #d1ef53;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    color: var(--color-white);
    background-color: var(--color-purple);
    opacity: 0.96;
  }
`;
