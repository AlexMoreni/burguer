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
  ErrorNoneAddress,
} from "./Payment.style";

const Payment = () => {
  const [address, setAddress] = useState(false);
  const [cep, setCep] = useState("");
  const [number, setNumber] = useState("");
  const [reference, setReference] = useState("");
  const [buttonToggle, setButtonToggle] = useState("Adicionar");
  const [idCard, setIdCard] = useState(false);
  const [errorNewAddress, setErrorNewAddress] = useState("");
  //Confirm
  const [names, setNames] = useState("");
  const [value, setValue] = useState(0);
  const [errorConfirm, setErrorConfirm] = useState("");

  useEffect(() => {
    axios
      .get("https://api-burguer.onrender.com/burguer/user/address", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.address !== "Você ainda não tem nada cadastrado!") {
          setAddress(response.data.address);
        }
      })
      .catch((err) => console.log(err));
  }, [idCard, reference]);

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
      .post("https://api-burguer.onrender.com/burguer/address", {
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
        .post("https://api-burguer.onrender.com/burguer/deleteaddress", {
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

  const handleConfirm = () => {
    setErrorConfirm("");

    if (!address) {
      setErrorConfirm("Sem endereço cadastrado não tem como aprovar!");
      return;
    }

    const addressSelect = document.querySelectorAll(".select");

    if (addressSelect.length < 1) {
      setErrorConfirm("Selecione um endereço antes de confirmar!");
      return;
    }

    axios.defaults.withCredentials = true;

    // Criando pedido
    axios
      .post("https://api-burguer.onrender.com/burguer/order", {
        order: names,
        value,
      })
      .then((response) => {
        if (response.data.message === "Pedido Feito!") {
          axios
            .post("https://api-burguer.onrender.com/burguer/updateproductscart")
            .then((response) => {
              if (response.data.message === "Pedido sendo preparado!") {
                window.location.href = "/";
              }
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("https://api-burguer.onrender.com/burguer/productscart", {
        withCredentials: true,
      })
      .then(async (response) => {
        const productsCart = response.data.productsCart;

        let saldo = 0;
        let namesOrder = "";

        //Dados valores
        const filteredProducts = productsCart.filter((product) => {
          return product.finished !== 1;
        });

        if (filteredProducts.length > 0) {
          filteredProducts.map((product) => {
            saldo += parseFloat(product.value);
            namesOrder += product.orderName + ", ";
          });
        }

        setNames(namesOrder);
        setValue(saldo);
      })
      .catch((err) => console.log(err));
  }, [names]);

  return (
    <Container>
      <TitlePayment>Pagamento</TitlePayment>
      <ImgPayment src="/qrcode.png" alt="" />
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
        address.map((addr, index) => (
          <ContainerCardsAddress key={addr.id}>
            <CardAddress
              key={addr.id}
              onClick={() => {
                toggleCard();
              }}
              id="cardAddress"
            >
              <TitleCardAddress>Endereço {index + 1}</TitleCardAddress>
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
      {errorConfirm && <ErrorNoneAddress>{errorConfirm}</ErrorNoneAddress>}
      <ButtonConfirm onClick={handleConfirm}>Confirmar</ButtonConfirm>
    </Container>
  );
};

export default Payment;
