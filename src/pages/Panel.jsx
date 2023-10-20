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

const Panel = () => {
  const [content, setContent] = useState(<AddProducts />);

  const renderConditional = (value) => {
    if (value === "conteudo1") {
      setContent(<AddProducts />);
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
          <Buttons className="Btn">
            <FaBell />
            Pedidos
          </Buttons>
          <Buttons className="Btn">
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
