import styled from "styled-components";

export const Container = styled.section`
  max-width: 100vw;
  min-height: 100vh;
  background-color: var(--color-black);
  padding-top: calc(15vh + 10px);
  padding-bottom: 50px;
`;

//Welcome

export const ContainerWelcome = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 2em;
`;

export const TextWelcome = styled.h1`
  font-family: var(--font-emphasis);
  font-size: 9rem;
  color: var(--color-white);
  text-align: center;
  text-transform: uppercase;
  line-height: 88.896%;

  @media (max-width: 480px) {
    font-size: 4rem;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 6.6rem;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 7rem;
  }
`;

export const ImgWelcome = styled.img`
  max-width: 100%;
  z-index: 999;
  margin-top: -20px;
`;

//Slogan

export const ContainerSlogan = styled.div`
  max-width: 90%;
  background-color: var(--color-yellow);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding: 2em;

  @media (max-width: 480px) {
    flex-direction: column;
    padding-bottom: 70px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const TitleSlogan = styled.h2`
  max-width: 50%;
  font-family: var(--font-emphasis);
  font-size: 6rem;
  color: var(--color-black);
  line-height: 88.896%;
  text-transform: uppercase;

  @media (max-width: 480px) {
    max-width: 90%;
    font-size: 3rem;
    text-align: center;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    max-width: 90%;
    font-size: 4.7rem;
    text-align: center;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 5rem;
  }
`;

export const ContainerTextSlogan = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const TextSlogan = styled.p`
  font-family: var(--font-text);
  font-size: 2.4rem;
  color: var(--color-black);
  text-align: center;
  line-height: 139.896%;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    margin-top: 30px;
  }
`;

export const ButtonSlogan = styled.a`
  font-family: var(--font-emphasis);
  font-size: 1.8rem;
  color: var(--color-black);
  background-color: var(--color-white);
  border: 4px solid var(--color-black);
  padding: 21px 35px;
  box-shadow: 8px 8px 0px 0px #000;
  text-transform: uppercase;

  &:hover {
    color: var(--color-white);
    background-color: var(--color-purple);
  }
`;

//Menu
export const ContainerMenu = styled.div`
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding-top: 5em;
  gap: 30px;

  @media (max-width: 480px) {
    flex-direction: column;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const DisclosureCardMenu = styled.div`
  min-width: 50%;
  height: 600px;
  background-color: black;
  border-radius: 30px;
  position: relative;
`;

export const DisclosureCardImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const DisclosureCardTextContainer = styled.div`
  width: 386px;
  background-color: var(--color-black);
  border-radius: 30px;
  position: absolute;
  left: 23px;
  bottom: 23px;
  padding: 2rem;

  @media (max-width: 480px) {
    width: 250px;
    left: 5px;
    bottom: 15px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 260px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    left: 13px;
  }
`;

export const DisclosureCardTextTitle = styled.h3`
  font-family: var(--font-emphasis);
  font-size: 3rem;
  color: var(--color-white);
  text-transform: uppercase;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 2.2rem;
  }
`;

export const DisclosureCardTextLink = styled.a`
  font-family: var(--font-emphasis);
  font-size: 2rem;
  color: var(--color-purple);
  text-transform: uppercase;

  &:hover {
    color: var(--color-yellow);
  }
`;

/*Img and phrase counter */
export const ContainerCounter = styled.div`
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding-top: 5em;
  gap: 30px;
`;

export const CounterTitle = styled.h3`
  font-family: var(--font-emphasis);
  font-size: 4.7rem;
  color: var(--color-yellow);
  line-height: 88.896%;
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 2.3rem;
    text-align: center;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 3.7rem;
    text-align: center;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    text-align: center;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    text-align: center;
  }
`;

export const CounterImg = styled.img`
  max-width: 106%;
  margin-left: -5.5em;

  @media (max-width: 480px) {
    margin-left: -1.6rem;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin-left: -3.2rem;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    margin-left: -4.2em;
  }
`;

//Address
export const ContainerAddress = styled.div`
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding: 0 2em;
  gap: 30px;
`;

export const TitleAddress = styled.h1`
  font-family: var(--font-emphasis);
  font-size: 6rem;
  color: var(--color-white);
  line-height: 101.896%;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 40px;

  @media (max-width: 480px) {
    font-size: 3.2rem;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 5rem;
  }
`;

export const ButtonAdress = styled.a`
  font-family: var(--font-emphasis);
  font-size: 1.8rem;
  color: var(--color-black);
  background: var(--color-yellow);
  padding: 21px 34px;
  line-height: 96.896%;
  text-transform: uppercase;
  transition: 0.5s;

  &:hover {
    color: var(--color-white);
    background: var(--color-purple);
  }
`;

export const ContainerColumnsCardsAddress = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 60px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    gap: 50px;
  }
`;

export const ColumnsAddress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const TitleColumnAddress = styled.h1`
  font-family: var(--font-emphasis);
  font-size: 4.5rem;
  color: var(--color-white);
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 3rem;
    padding-top: 30px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    padding-top: 30px;
  }
`;

export const CardAddress = styled.div`
  width: 400px;
  display: flex;
  background-color: #2f2d2e;
  border: 4px solid var(--color-white);
  border-radius: 10px;

  @media (max-width: 480px) {
    width: 300px;
    flex-direction: column;
    text-align: center;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 360px;
  }
`;

export const CardAddressDetails = styled.div`
  padding: 2em;
  color: var(--color-white);
`;

export const TitleCardDetailsAddress = styled.h4`
  font-family: var(--font-title-card);
  font-size: 2rem;
  color: #e3e3e3;
  margin-bottom: 15px;
`;

export const TextCardDetailsAddress = styled.p`
  font-family: var(--font-text);
  font-size: 1.3rem;
  color: #e3e3e3;
`;
