import axios from "axios";
import { useEffect, useState } from "react";
import {
  Container,
  FieldSearch,
  Input,
  ButtonInput,
  ContainerTitle,
  Title,
  ContainerCardsClients,
  CardClients,
  ImgClient,
  TextCardClient,
  EmphasisCardClient,
  ContainerStatusCard,
  SelectStatusClients,
  ButtonAttStautsClient,
} from "./Clients.style";

const Clients = () => {
  const [clients, setClientes] = useState(false);
  const [idClient, setIdClient] = useState(0);
  const [charge, setCharge] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/burguer/all/clients", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.message === "Usuários encontrados!") {
          setClientes(response.data.users);
        }
      })
      .catch((err) => console.log(err));
  }, [charge]);

  const handleAttCharge = (e) => {
    e.preventDefault();
    setIdClient(e.target[0].value);
    setCharge(e.target[1].value);
  };

  useEffect(() => {
    axios.defaults.withCredentials = true;

    if (idClient !== 0) {
      axios
        .post("http://localhost:3000/burguer/updateuser", {
          id: idClient,
          charge,
        })
        .then((response) => {
          if (response.data.message === "Usuário atualizado!") {
            setIdClient(0);
            setCharge("");
          }
        })
        .catch((err) => console.log(err));
    }
  }, [charge]);

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
        <Title>Clientes</Title>
      </ContainerTitle>
      <ContainerCardsClients>
        {clients &&
          clients.map((client) => (
            <CardClients key={client.id}>
              <ImgClient src="../../public/user.jpg"></ImgClient>
              <TextCardClient>
                <EmphasisCardClient>Id:</EmphasisCardClient> {client.id}
              </TextCardClient>
              <TextCardClient>
                <EmphasisCardClient>Nome:</EmphasisCardClient> {client.name}
              </TextCardClient>
              <TextCardClient>
                <EmphasisCardClient>Email:</EmphasisCardClient> {client.email}
              </TextCardClient>
              <TextCardClient>
                <EmphasisCardClient>Criado em:</EmphasisCardClient>{" "}
                {new Date(client.createdAt)
                  .toISOString()
                  .split("T")[0]
                  .split("-")
                  .reverse()
                  .join("-")}
              </TextCardClient>
              <ContainerStatusCard onSubmit={handleAttCharge}>
                <input type="text" id="id" value={client.id} readOnly hidden />
                <EmphasisCardClient>Cargo: </EmphasisCardClient>
                {client.charge}
                <SelectStatusClients id="status">
                  <option value="cliente">Cliente</option>
                  <option value="admin">Administrador</option>
                </SelectStatusClients>
                <ButtonAttStautsClient>Atualizar</ButtonAttStautsClient>
              </ContainerStatusCard>
            </CardClients>
          ))}
      </ContainerCardsClients>
    </Container>
  );
};

export default Clients;
