import { useEffect, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
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
  ButtonTrash,
  ValueCardCartShopping,
  ContainerPay,
  TextPay,
  ValuePay,
  ButtonPay,
  CartShoppingMessage,
} from "./ShoppingCart.style";
import axios from "axios";

const ShoppingCart = () => {
  const [cartProducts, setCartProducts] = useState(false);
  const [idCard, setIdCard] = useState(false);
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
  }, [idCard, cartProducts]);

  const handleDelete = (e) => {
    e.preventDefault();

    axios.defaults.withCredentials = true;

    const formData = new FormData(e.target);

    setIdCard(formData.get("id"));
  };

  useEffect(() => {
    if (idCard !== false) {
      axios
        .post("http://localhost:3000/burguer/deleteproductscart", {
          idCard,
        })
        .then((response) => {
          if (response.data.message === "Produto excluído!") {
            setIdCard(false);
          }

          if (cartProducts.length <= 1) {
            setCartProducts(false);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [idCard]);

  return (
    <Container>
      <ContainerText>
        <TitlePage>Carrinho de compras</TitlePage>
      </ContainerText>
      <ContainerItems>
        {!cartProducts && (
          <CartShoppingMessage>
            Infelizmente você ainda não adicionou nada. 😢
          </CartShoppingMessage>
        )}
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
                  <form onSubmit={handleDelete}>
                    <input
                      type="number"
                      name="id"
                      value={card.id}
                      hidden
                      readOnly
                    />
                    <ButtonTrash>
                      <BsFillTrashFill />
                    </ButtonTrash>
                  </form>
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
