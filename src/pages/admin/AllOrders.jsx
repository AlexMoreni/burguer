import { useEffect, useState } from "react";
import {
  Container,
  FieldSearch,
  Input,
  ButtonInput,
  ContainerTitle,
  Title,
  ContainerCardsOrders,
  CardOrders,
  TextCardOrder,
  EmphasisCardOrder,
  ContainerStatusCard,
  SelectStatusOrder,
  ButtonAttStautsOrder,
} from "./AllOrders.style";
import axios from "axios";

const AllOrders = () => {
  const [orders, setOrders] = useState(false);
  const [idOrder, setIdOrder] = useState(0);
  const [status, setStatus] = useState("");

  useEffect(() => {
    axios
      .get("https://api-burguer.onrender.com/burguer/all/orders", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.message === "Pedidos encontrados!") {
          setOrders(response.data.orders);
        }
      })
      .catch((err) => console.log(err));
  }, [status]);

  const handleAttStatus = (e) => {
    e.preventDefault();
    setIdOrder(e.target[0].value);
    setStatus(e.target[1].value);
  };

  useEffect(() => {
    axios.defaults.withCredentials = true;

    if (idOrder !== 0) {
      axios
        .post("https://api-burguer.onrender.com/burguer/updateorder", {
          id: idOrder,
          status,
        })
        .then((response) => {
          if (response.data.message === "Pedido atualizado!") {
            setIdOrder(0);
            setStatus("");
          }
        })
        .catch((err) => console.log(err));
    }
  }, [status]);

  return (
    <Container>
      <FieldSearch>
        <Input
          type="text"
          name="search"
          placeholder="Está buscando algo?"
          autoComplete="off"
          disabled
        />
        <ButtonInput type="submit" value="Buscar" hidden />
      </FieldSearch>
      <ContainerTitle>
        <Title>Pedidos</Title>
      </ContainerTitle>
      {!orders && <p>Nenhum pedido para ser preparado!</p>}
      <ContainerCardsOrders>
        {orders &&
          orders.map((order) => (
            <CardOrders key={order.id}>
              <img src="/logo-footer.png" />
              <TextCardOrder>
                <EmphasisCardOrder>Id:</EmphasisCardOrder> {order.id}
              </TextCardOrder>
              <TextCardOrder>
                <EmphasisCardOrder>Cliente:</EmphasisCardOrder>{" "}
                {order.clientName}
              </TextCardOrder>
              <TextCardOrder>
                <EmphasisCardOrder>Criado em: </EmphasisCardOrder>
                {new Date(order.createdAt)
                  .toISOString()
                  .split("T")[0]
                  .split("-")
                  .reverse()
                  .join("-")}
              </TextCardOrder>
              <TextCardOrder>
                <EmphasisCardOrder>Horário: </EmphasisCardOrder>
                {new Date(order.createdAt).toTimeString().split(" ")[0]}
              </TextCardOrder>
              <TextCardOrder>
                <EmphasisCardOrder>Pedido:</EmphasisCardOrder> {order.order}
              </TextCardOrder>
              <ContainerStatusCard onSubmit={handleAttStatus}>
                <input type="text" id="id" value={order.id} readOnly hidden />
                <EmphasisCardOrder>Status: </EmphasisCardOrder>
                {order.status}
                <SelectStatusOrder id="status">
                  <option value="em preparo">Em preparo</option>
                  <option value="saiu para entrega">Saiu para entrega</option>
                  <option value="concluido">Concluido</option>
                  <option value="cancelado">Cancelado</option>
                </SelectStatusOrder>

                <ButtonAttStautsOrder>Atualizar</ButtonAttStautsOrder>
              </ContainerStatusCard>
            </CardOrders>
          ))}
      </ContainerCardsOrders>
    </Container>
  );
};

export default AllOrders;
