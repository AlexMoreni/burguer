import { useState } from "react";

import { FaPizzaSlice, FaBell } from "react-icons/fa";
import { BsPersonVcardFill } from "react-icons/bs";

import {
  Container,
  ContainerAside,
  AsideTitle,
  Title,
  AsideButtons,
  Buttons,
  ContainerContent,
} from "./Panel.style";

import AddProducts from "../pages/admin/AddProducts";
import AllOrders from "./admin/AllOrders";
import Clients from "./admin/Clients";

const Panel = () => {
  const [content, setContent] = useState(<AddProducts />);

  const renderConditional = (value) => {
    if (value === "conteudo1") {
      setContent(<AddProducts />);
    } else if (value === "conteudo2") {
      setContent(<AllOrders />);
    } else {
      setContent(<Clients />);
    }
  };

  return (
    <Container>
      <ContainerAside>
        <AsideTitle>
          <img src="../../public/logo.png" alt="" />
          <Title>Burguer</Title>
        </AsideTitle>
        <AsideButtons>
          <Buttons onClick={() => renderConditional("conteudo1")}>
            <FaPizzaSlice />
            Comidas e bebidas
          </Buttons>
          <Buttons onClick={() => renderConditional("conteudo2")}>
            <FaBell />
            Pedidos
          </Buttons>
          <Buttons onClick={() => renderConditional("conteudo3")}>
            <BsPersonVcardFill />
            Clientes
          </Buttons>
        </AsideButtons>
      </ContainerAside>
      <ContainerContent>{content}</ContainerContent>
    </Container>
  );
};

export default Panel;
