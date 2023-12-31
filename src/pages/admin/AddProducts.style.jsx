import styled from "styled-components";

export const Container = styled.section`
  min-width: 100%;
  min-height: 100vh;
  background-color: var(--color-black);
  padding: 2rem;
  box-sizing: border-box;

  @media (min-width: 481px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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

  @media (max-width: 480px) {
    flex-direction: column;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    flex-direction: column;
  }
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

export const ContainerCardsProducts = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0 2rem;
  margin-top: 80px;

  @media (max-width: 480px) {
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    align-items: center;
    justify-content: center;
  }
`;

export const CardProduct = styled.div`
  width: 260px;
  min-height: 288px;
  border-radius: 10px;
  border: 4px solid var(--color-purple);
  padding: 15px 0;
  background: #2f2d2e;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
`;

export const ImgCardProduct = styled.img`
  max-width: 200px;
  height: 120px;
`;

export const NameCardProduct = styled.h2`
  max-width: 100%;
  font-family: var(--font-emphasis);
  font-size: 1.6rem;
  color: var(--color-white);
  margin-top: 20px;
  text-align: center;
  text-transform: uppercase;
`;

export const EmphasisName = styled.span`
  color: var(--color-orange);
`;

export const Update = styled.form`
  font-size: 2.5rem;
  color: var(--color-white);
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const Delete = styled.form`
  font-size: 2.5rem;
  color: var(--color-white);
  position: absolute;
  top: 45px;
  right: 10px;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  font-family: var(--font-emphasis);
  font-size: 3rem;
  color: var(--color-white);
  text-align: center;
  margin-top: 25px;
`;
