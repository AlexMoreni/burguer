import styled from "styled-components";

export const Header = styled.header`
  width: 100vw;
  height: 15vh;
  background-color: var(--color-black);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 999;
`;

export const Logo = styled.img`
  height: 85px;
  padding-left: 4rem;
`;

export const ContainerLinks = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 50px;
  padding-right: 4rem;

  @media (max-width: 480px) {
    display: none;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    display: none;
  }
`;

export const LinkText = styled.a`
  font-size: 1.8rem;
  font-family: var(--font-emphasis);
  color: var(--color-white);
  text-transform: uppercase;

  &:hover {
    color: var(--color-purple);
  }
`;

export const ButtonLink = styled.a`
  font-family: var(--font-emphasis);
  font-size: 1.8rem;
  color: var(--color-black);
  background-color: var(--color-purple);
  padding: 21px 34px;
  text-transform: uppercase;

  &:hover {
    color: var(--color-white);
  }
`;

export const Cart = styled.a`
  font-size: 3rem;
  color: var(--color-white);
  position: relative;

  &:hover {
    color: var(--color-purple);
  }
`;

export const BallNotiCart = styled.p`
  width: 25px;
  height: 25px;
  font-family: var(--font-text);
  font-size: 1.6rem;
  background-color: red;
  text-align: center;
  position: absolute;
  top: -15px;
  right: -10px;
  border-radius: 50%;
  padding: 0.5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HamburguerMenu = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  padding-right: 4rem;
  z-index: 1;

  @media (max-width: 480px) {
    display: block;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: block;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    display: block;
  }
`;

export const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: var(--color-white); /* Cor das linhas horizontais */
  margin: 6px 0;
`;

export const MobileMenu = styled.div`
  max-width: 300px;
  display: none;
  background: var(--color-black);
  border: 3px solid var(--color-white);
  position: absolute;
  top: 80px;
  right: 65px;
  z-index: 9999;
  text-align: center;
  display: flex;
  flex-direction: column !important;

  ${({ isOpen }) =>
    isOpen &&
    `
    display: block;
  `}

  @media (min-width: 768px) and (max-width: 991px) {
    top: 110px;
  }
`;

export const LinkTextMobile = styled.a`
  font-size: 1.8rem;
  font-family: var(--font-emphasis);
  color: var(--color-white);
  text-transform: uppercase;
  display: block;
  border-bottom: 3px solid var(--color-white);
  padding: 10px;

  &:hover {
    color: var(--color-purple);
  }
`;
