import { useState, useEffect } from "react";
import axios from "axios";
import { BsFillTrashFill } from "react-icons/bs";

import {
  Container,
  TitlePayment,
  ImgPayment,
  AddressTitle,
  NoneAddress,
  ButtonConfirm,
  FormAddAddress,
  TitleForm,
  LabelForm,
  InputFormAdd,
  ButtonAddAddress,
  ButtonHiddenForm,
  ContainerCardsAddress,
  CardAddress,
  TitleCardAddress,
  TextCardAddress,
  EmphasisCardAddress,
  ButtonTrash,
  ErrorNewAddress,
} from "./Payment.style";

const Payment = () => {
  const [address, setAddress] = useState(false);
  const [cep, setCep] = useState("");
  const [number, setNumber] = useState("");
  const [reference, setReference] = useState("");
  const [buttonToggle, setButtonToggle] = useState("Adicionar");
  const [idCard, setIdCard] = useState(false);
  const [errorNewAddress, setErrorNewAddress] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/burguer/user/address", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.address !== "Você ainda não tem nada cadastrado!") {
          console.log(response);
          setAddress(response.data.address);
        }
      })
      .catch((err) => console.log(err));
  }, [idCard]);

  const newAddress = (e) => {
    e.preventDefault();

    if (cep.length < 8) {
      setErrorNewAddress("CEP faltando digitos");
      return;
    }

    if (cep.length > 8) {
      setErrorNewAddress("CEP com digitos á mais");
      return;
    }

    if (!number) {
      setErrorNewAddress("Preencha o número!");
    }

    axios.defaults.withCredentials = true;

    axios
      .post("http://localhost:3000/burguer/address", {
        cep,
        number,
        reference,
      })
      .then((response) => {
        if (response.data.message === "Endereço Cadastrado!") {
          toggleForm();
          setCep("");
          setNumber("");
          setReference("");
          setErrorNewAddress("");
        }
      })
      .catch((err) => setErrorNewAddress(err.response.data.error));
  };

  const toggleForm = () => {
    const form = document.querySelector("#form");
    const buttonToggle = document.querySelector("#buttonToggle");

    if (buttonToggle.innerHTML === "Adicionar") {
      setButtonToggle("Fechar");
    } else {
      setButtonToggle("Adicionar");
    }

    form.classList.toggle("hidden");
  };

  const toggleCard = () => {
    let selectCard = null;

    const cards = document.querySelectorAll("#cardAddress");

    cards.forEach((card) => {
      card.addEventListener("click", (e) => {
        if (selectCard) {
          selectCard.classList.remove("select");
        }

        card.classList.add("select");
        selectCard = card;
      });
    });
  };

  const handleDelete = (e) => {
    e.preventDefault();

    axios.defaults.withCredentials = true;

    const formData = new FormData(e.target);

    setIdCard(formData.get("id"));
  };

  useEffect(() => {
    if (idCard !== false) {
      axios
        .post("http://localhost:3000/burguer/deleteaddress", {
          idCard,
        })
        .then((response) => {
          if (response.data.message === "Endereço excluído!") {
            setIdCard(false);
          }

          if (address.length <= 1) {
            setAddress(false);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [idCard]);

  return (
    <Container>
      <TitlePayment>Pagamento</TitlePayment>
      <ImgPayment src="../../public/qrcode.png" alt="" />
      <AddressTitle>Selecione o endereço</AddressTitle>
      <ButtonHiddenForm
        onClick={() => {
          toggleForm();
        }}
        id="buttonToggle"
        title="Adicionar novo endereço"
      >
        {buttonToggle}
      </ButtonHiddenForm>
      <div className="hidden" id="form">
        <FormAddAddress onSubmit={newAddress} className="hidden">
          <TitleForm>Adicionando endereço</TitleForm>
          <LabelForm>
            CEP:
            <InputFormAdd
              type="number"
              placeholder="Digite o CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
          </LabelForm>
          <LabelForm>
            Número:
            <InputFormAdd
              type="number"
              placeholder="Digite o número"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </LabelForm>
          <LabelForm>
            Referencia:
            <InputFormAdd
              type="text"
              placeholder="Digite uma referencia"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
            />
          </LabelForm>
          <ButtonAddAddress type="submit" value="Adicionar" />
          {errorNewAddress && (
            <ErrorNewAddress>{errorNewAddress}</ErrorNewAddress>
          )}
        </FormAddAddress>
      </div>
      {!address && <NoneAddress>Nenhum endereço encontrado!</NoneAddress>}
      {address &&
        address.map((addr) => (
          <ContainerCardsAddress>
            <CardAddress
              key={addr.id}
              onClick={() => {
                toggleCard();
              }}
              id="cardAddress"
            >
              <TextCardAddress>
                <TitleCardAddress>Endereço {addr.id}</TitleCardAddress>
              </TextCardAddress>
              <TextCardAddress>
                <EmphasisCardAddress>CEP:</EmphasisCardAddress> {addr.cep}
              </TextCardAddress>
              <TextCardAddress>
                <EmphasisCardAddress>RUA:</EmphasisCardAddress> {addr.street}
              </TextCardAddress>
              <TextCardAddress>
                <EmphasisCardAddress>NÚMERO:</EmphasisCardAddress> {addr.number}
              </TextCardAddress>
              <TextCardAddress>
                <EmphasisCardAddress>BAIRRO:</EmphasisCardAddress> {addr.street}
              </TextCardAddress>
              <TextCardAddress>
                <EmphasisCardAddress>REFERENCIA:</EmphasisCardAddress>{" "}
                {addr.reference}
              </TextCardAddress>
              <form onSubmit={handleDelete}>
                <input type="text" name="id" value={addr.id} readOnly hidden />
                <ButtonTrash>
                  <BsFillTrashFill />
                </ButtonTrash>
              </form>
            </CardAddress>
          </ContainerCardsAddress>
        ))}
      <ButtonConfirm>Confirmar</ButtonConfirm>
    </Container>
  );
};

export default Payment;
