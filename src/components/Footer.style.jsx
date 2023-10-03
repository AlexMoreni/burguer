import styled from "styled-components";

export const ContainerFooter = styled.footer`
  max-width: 100vw;
  background-color: var(--color-black);
  padding: 2em;
`;

export const ContentFooter = styled.div`
  max-width: 90%;
  background-color: var(--color-purple);
  margin: 0 auto;
  border-radius: 30px;
  padding: 4rem;
  display: flex;
  justify-content: space-between;
`;

export const ContainerFooterMore = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleFooter = styled.h2`
  font-family: var(--font-emphasis);
  font-size: 2rem;
  color: var(--color-black);
  margin-bottom: 15px;
  line-height: 96.896%;
  text-transform: uppercase;
`;

export const LinkFooter = styled.a`
  font-family: var(--font-text);
  font-size: 1.7rem;
  color: var(--color-black);

  &:hover {
    color: var(--color-white);
  }
`;

export const SocialMediaFooter = styled.div`
  display: flex;
  gap: 20px;
`;
