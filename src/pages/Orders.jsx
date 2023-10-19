import React from "react";

import {
  AiOutlineFieldTime,
  AiOutlineCheckCircle,
  AiOutlineInfoCircle,
} from "react-icons/ai";

import { FaHamburger } from "react-icons/fa";

import {
  Container,
  TitlePage,
  ContainerCardsOrders,
  CardOrder,
  ContainerCardTitle,
  CardTitle,
  ContainerCardItems,
  CardItems,
  CardItemOrder,
  CardItemsEmphasis,
} from "../pages/Orders.style";

const Orders = () => {
  return (
    <Container>
      <TitlePage>Acompanhe seu pedido</TitlePage>
      <ContainerCardsOrders>
        <CardOrder>
          <ContainerCardTitle>
            <img src="../../public/logo.png" alt="" />
            <CardTitle>Burguer</CardTitle>
          </ContainerCardTitle>
          <ContainerCardItems>
            <CardItems>
              <AiOutlineFieldTime />
              <h3>
                <CardItemsEmphasis>Previsão de entrega:</CardItemsEmphasis>{" "}
                40-50min
              </h3>
            </CardItems>
            <CardItems>
              <AiOutlineCheckCircle />
              <h3>
                <CardItemsEmphasis>Realizado:</CardItemsEmphasis> 13h50
              </h3>
            </CardItems>
            <CardItems>
              <AiOutlineInfoCircle />
              <h3>
                <CardItemsEmphasis>Status:</CardItemsEmphasis> Em preparo
              </h3>
            </CardItems>
            <CardItemOrder>
              <FaHamburger />
              <h3>
                <CardItemsEmphasis>Pedido:</CardItemsEmphasis> Burguer 1,
                Burguer 2 Burguer 1, Burguer 2 Burguer 1, Burguer 2 Burguer 1,
                Burguer 2 Burguer 1, Burguer 2
              </h3>
            </CardItemOrder>
          </ContainerCardItems>
        </CardOrder>
        <CardOrder>
          <ContainerCardTitle>
            <img src="../../public/logo.png" alt="" />
            <CardTitle>Burguer</CardTitle>
          </ContainerCardTitle>
          <ContainerCardItems>
            <CardItems>
              <AiOutlineFieldTime />
              <h3>
                <CardItemsEmphasis>Previsão de entrega:</CardItemsEmphasis>{" "}
                40-50min
              </h3>
            </CardItems>
            <CardItems>
              <AiOutlineCheckCircle />
              <h3>
                <CardItemsEmphasis>Realizado:</CardItemsEmphasis> 13h50
              </h3>
            </CardItems>
            <CardItems>
              <AiOutlineInfoCircle />
              <h3>
                <CardItemsEmphasis>Status:</CardItemsEmphasis> Em preparo
              </h3>
            </CardItems>
            <CardItemOrder>
              <FaHamburger />
              <h3>
                <CardItemsEmphasis>Pedido:</CardItemsEmphasis> Burguer 1,
                Burguer 2 Burguer 1, Burguer 2 Burguer 1, Burguer 2 Burguer 1,
                Burguer 2 Burguer 1, Burguer 2
              </h3>
            </CardItemOrder>
          </ContainerCardItems>
        </CardOrder>
      </ContainerCardsOrders>
    </Container>
  );
};

export default Orders;
