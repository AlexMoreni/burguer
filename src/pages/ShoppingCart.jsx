import { useEffect, useState } from "react";
import { Container, ContainerText, TitlePage } from "./ShoppingCart.style";
import axios from "axios";

const ShoppingCart = () => {
  return (
    <Container>
      <ContainerText>
        <TitlePage>Carrinho de compras</TitlePage>
      </ContainerText>
    </Container>
  );
};

export default ShoppingCart;
