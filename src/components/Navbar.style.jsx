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

  &:hover {
    color: var(--color-purple);
  }
`;
