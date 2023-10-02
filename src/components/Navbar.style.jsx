import styled from "styled-components";

export const Header = styled.header`
  height: 15vh;
  background-color: red;
  padding: 0 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 85px;
`;

export const ContainerLinks = styled.nav`
  display: flex;
  gap: 50px;
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
`;
