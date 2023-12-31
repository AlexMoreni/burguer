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
import { Link } from "react-router-dom";

const ShoppingCart = ({ cartQty, setCartQty }) => {
  const [cartProducts, setCartProducts] = useState(false);
  const [idCard, setIdCard] = useState(false);
  let valueAll = 0;

  useEffect(() => {
    axios
      .get("https://api-burguer.onrender.com/burguer/productscart", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.message === "Produtos encontrados!") {
          const productsCart = response.data.productsCart;

          const filteredProducts = productsCart.filter((product) => {
            return product.finished !== 1;
          });

          if (filteredProducts.length > 0) {
            setCartProducts(filteredProducts);
          }
        }
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
  }, [idCard]);

  const handleDelete = (e) => {
    e.preventDefault();

    axios.defaults.withCredentials = true;

    const formData = new FormData(e.target);

    setIdCard(formData.get("id"));
  };

  useEffect(() => {
    if (idCard !== false) {
      axios
        .post("https://api-burguer.onrender.com/burguer/deleteproductscart", {
          idCard,
        })
        .then((response) => {
          if (response.data.message === "Produto excluído!") {
            setIdCard(false);
            if (cartQty === 1) {
              setCartQty(false);
            } else {
              setCartQty(cartQty - 1);
            }
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
          {cartProducts && (
            <Link to="/payment">
              <ButtonPay>Pagar</ButtonPay>
            </Link>
          )}
        </ContainerPay>
      </ContainerItems>
    </Container>
  );
};

export default ShoppingCart;
