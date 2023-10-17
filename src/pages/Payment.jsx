import { useState, useEffect } from "react";
import axios from "axios";

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
} from "./Payment.style";

const Payment = () => {
  const [address, setAddress] = useState(false);
  const [cep, setCep] = useState("");
  const [number, setNumber] = useState(0);
  const [reference, setReference] = useState("");
  const [buttonToggle, setButtonToggle] = useState("Adicionar");

  const newAddress = (e) => {
    e.preventDefault();

    if (cep < 8) {
      console.log("CEP faltando digitos");
      return;
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
          const form = document.querySelector("#form");
          form.classList.add("hidden");
          setButtonToggle("Adicionar");
        }
      })
      .catch((err) => console.log(err));
  };

  const toggleForm = (e) => {
    const form = document.querySelector("#form");
    const buttonToggle = document.querySelector("#buttonToggle");

    if (buttonToggle.innerHTML === "Adicionar") {
      setButtonToggle("Fechar");
    } else {
      setButtonToggle("Adicionar");
    }

    form.classList.toggle("hidden");
  };

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
              onChange={(e) => setCep(e.target.value)}
            />
          </LabelForm>
          <LabelForm>
            Número:
            <InputFormAdd
              type="number"
              placeholder="Digite o número"
              onChange={(e) => setNumber(e.target.value)}
            />
          </LabelForm>
          <LabelForm>
            Referencia:
            <InputFormAdd
              type="text"
              placeholder="Digite uma referencia"
              onChange={(e) => setReference(e.target.value)}
            />
          </LabelForm>
          <ButtonAddAddress type="submit" value="Adicionar" />
        </FormAddAddress>
      </div>
      {!address && <NoneAddress>Nenhum endereço encontrado!</NoneAddress>}
      <ButtonConfirm>Confirmar</ButtonConfirm>
    </Container>
  );
};

export default Payment;
