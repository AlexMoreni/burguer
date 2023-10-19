import { useState, useEffect } from "react";

import axios from "axios";

import {
  AiOutlineFieldTime,
  AiOutlineCheckCircle,
  AiOutlineInfoCircle,
  AiOutlineDollarCircle,
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
  const [orders, setOrders] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/burguer/user/orders", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.message === "Pedidos encontrados!") {
          setOrders(response.data.orders);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <TitlePage>Acompanhe seu pedido</TitlePage>
      <ContainerCardsOrders>
        {orders &&
          orders.map((order) => (
            <CardOrder>
              {console.log(order)}
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
                    <CardItemsEmphasis>Realizado:</CardItemsEmphasis>{" "}
                    {order.createdAt}
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
                    <CardItemsEmphasis>Pedido:</CardItemsEmphasis> {order.order}
                  </h3>
                </CardItemOrder>
              </ContainerCardItems>
            </CardOrder>
          ))}
      </ContainerCardsOrders>
    </Container>
  );
};

export default Orders;
