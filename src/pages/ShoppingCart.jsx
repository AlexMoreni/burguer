import { useEffect, useState } from "react";
import {
  Container,
  ContainerText,
  TitlePage,
  ContainerItems,
  CardCartShopping,
  ContainerTextCardCart,
  ImgCartShopping,
  InfoCardCartShopping,
  TitleCardCartShopping,
  DescriptionCardCartShopping,
  ValueCardCartShopping,
  ContainerPay,
  TextPay,
  ValuePay,
  ButtonPay,
} from "./ShoppingCart.style";
import axios from "axios";

const ShoppingCart = () => {
  const [cartProducts, setCartProducts] = useState(false);
  let valueAll = 0;

  useEffect(() => {
    axios
      .get("http://localhost:3000/burguer/productscart", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.message === "Produtos encontrados!") {
          setCartProducts(response.data.productsCart);
        }
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
  }, []);

  useEffect(() => {
    console.log(cartProducts);
    console.log(valueAll);
  }, [cartProducts, valueAll]);

  return (
    <Container>
      <ContainerText>
        <TitlePage>Carrinho de compras</TitlePage>
      </ContainerText>
      <ContainerItems>
        {cartProducts &&
          cartProducts.map((card) => (
            <CardCartShopping key={card.id}>
              <div>
                <ContainerTextCardCart>
                  <ImgCartShopping src={card.img} />
                  <InfoCardCartShopping>
                    <TitleCardCartShopping>
                      {card.orderName}
                    </TitleCardCartShopping>
                    <DescriptionCardCartShopping>
                      {card.description}
                    </DescriptionCardCartShopping>
                  </InfoCardCartShopping>
                </ContainerTextCardCart>
              </div>
              <div>
                <ValueCardCartShopping>R$ {card.value}</ValueCardCartShopping>
                <p hidden>{(valueAll += parseFloat(card.value))}</p>
              </div>
            </CardCartShopping>
          ))}
        <ContainerPay>
          <TextPay>
            Total: <ValuePay>R${valueAll}</ValuePay>
          </TextPay>
          <ButtonPay>Pagar</ButtonPay>
        </ContainerPay>
      </ContainerItems>
    </Container>
  );
};

export default ShoppingCart;
