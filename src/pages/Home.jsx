import { Link } from "react-router-dom";

import {
  Container,
  ContainerWelcome,
  TextWelcome,
  ImgWelcome,
  ContainerSlogan,
  TitleSlogan,
  ContainerTextSlogan,
  TextSlogan,
  ButtonSlogan,
  ContainerMenu,
  DisclosureCardMenu,
  DisclosureCardImg,
  DisclosureCardTextContainer,
  DisclosureCardTextTitle,
  DisclosureCardTextLink,
  ContainerCounter,
  CounterTitle,
  CounterImg,
  ContainerAddress,
  TitleAddress,
  ButtonAdress,
  ContainerColumnsCardsAddress,
  TitleColumnAddress,
  ColumnsAddress,
  CardAddress,
  CardAddressDetails,
  TitleCardDetailsAddress,
  TextCardDetailsAddress,
} from "./Home.style";

const Home = ({ isAuth }) => {
  return (
    <Container>
      <ContainerWelcome>
        <TextWelcome>Welcome to the paradise of flavors!</TextWelcome>
        <ImgWelcome src="/burguer-welcome.png" alt="burguer" />
      </ContainerWelcome>
      <ContainerSlogan>
        <TitleSlogan>O lugar onde a fome encontra a felicidade</TitleSlogan>
        <ContainerTextSlogan>
          <TextSlogan>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec
            ornare neque.
          </TextSlogan>
          <Link to="/products">
            <ButtonSlogan>Menu</ButtonSlogan>
          </Link>
        </ContainerTextSlogan>
      </ContainerSlogan>
      <ContainerMenu id="menu">
        <DisclosureCardMenu>
          <DisclosureCardImg src="/potato-menu-home.png" alt="" />
          <DisclosureCardTextContainer>
            <DisclosureCardTextTitle>
              Batatas fritas e acompanhamentos
            </DisclosureCardTextTitle>
            <Link to="/products">
              <DisclosureCardTextLink>Peça online</DisclosureCardTextLink>
            </Link>
          </DisclosureCardTextContainer>
        </DisclosureCardMenu>
        <DisclosureCardMenu>
          <DisclosureCardImg src="/hamburguer-menu-home.png" alt="" />
          <DisclosureCardTextContainer>
            <DisclosureCardTextTitle>
              Sanduíche de frango crocante
            </DisclosureCardTextTitle>
            <Link to="/products">
              <DisclosureCardTextLink>Peça online</DisclosureCardTextLink>
            </Link>
          </DisclosureCardTextContainer>
        </DisclosureCardMenu>
      </ContainerMenu>
      <ContainerCounter>
        <CounterTitle>“ o melhor hambúrguer que já comi “</CounterTitle>
        <CounterImg src="/img-home-counter.png" alt="counter-burguer" />
      </ContainerCounter>
      <ContainerAddress>
        <TitleAddress>
          faça seu pedido on-line ou venha nos visitar hoje
        </TitleAddress>
        <Link to="/products">
          <ButtonAdress>Pedir online</ButtonAdress>
        </Link>
        <ContainerColumnsCardsAddress>
          <ColumnsAddress>
            <TitleColumnAddress>Domicilio</TitleColumnAddress>
            <CardAddress>
              <img src="/wpp.png" alt="whatsapp" />
              <CardAddressDetails>
                <TitleCardDetailsAddress>
                  Rest. CC Boyaca
                </TitleCardDetailsAddress>
                <TextCardDetailsAddress>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqud
                  exercitation ullamco laboris
                </TextCardDetailsAddress>
              </CardAddressDetails>
            </CardAddress>
            <CardAddress>
              <img src="/delivery.png" alt="delivery" />
              <CardAddressDetails>
                <TitleCardDetailsAddress>
                  Rest. CC Boyaca
                </TitleCardDetailsAddress>
                <TextCardDetailsAddress>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqud
                  exercitation ullamco laboris
                </TextCardDetailsAddress>
              </CardAddressDetails>
            </CardAddress>
          </ColumnsAddress>
          <ColumnsAddress>
            <TitleColumnAddress>Restaurantes</TitleColumnAddress>
            <CardAddress>
              <img src="/restaurant-1.png" alt="Restaurante 1" />
              <CardAddressDetails>
                <TitleCardDetailsAddress>
                  Rest. CC Boyaca
                </TitleCardDetailsAddress>
                <TextCardDetailsAddress>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqud
                  exercitation ullamco laboris
                </TextCardDetailsAddress>
              </CardAddressDetails>
            </CardAddress>
            <CardAddress>
              <img src="/restaurant-1.png" alt="Restaurante 1" />
              <CardAddressDetails>
                <TitleCardDetailsAddress>
                  Rest. CC Boyaca
                </TitleCardDetailsAddress>
                <TextCardDetailsAddress>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqud
                  exercitation ullamco laboris
                </TextCardDetailsAddress>
              </CardAddressDetails>
            </CardAddress>
          </ColumnsAddress>
        </ContainerColumnsCardsAddress>
      </ContainerAddress>
    </Container>
  );
};

export default Home;
