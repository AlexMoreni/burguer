import { useEffect, useState } from "react";
import axios from "axios";

import Slide from "../components/Slide";

import {
  Container,
  ProductsSlide,
  SlideTitle,
  SearchField,
  SearchInput,
  SearchButton,
  MessageError,
  ContainerCardsProducts,
  CardProduct,
  ImgCardProduct,
  NameCardProduct,
  DescriptionCardProduct,
  ButtonCardProduct,
} from "./Products.style";

const Products = () => {
  const [products, setProducts] = useState(false);
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/burguer/products", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.message === "Produtos encontrados!") {
          setProducts(response.data.products);
        }
      })
      .catch((err) => {
        console.log(err.response);

        if (err.response.data.error === "Nenhum produto cadastrado!") {
          setMessageError(
            "Infelizmente, ainda não temos nenhum produto disponivel para à venda!"
          );
        }
      });
  }, []);

  return (
    <Container>
      <ProductsSlide>
        <SlideTitle>Os mais vendidos</SlideTitle>
        <Slide />
      </ProductsSlide>
      <SearchField>
        <SearchInput type="text" placeholder="Está buscando algo?" />
        <SearchButton>BUSCAR</SearchButton>
      </SearchField>
      {messageError && <MessageError>{messageError}</MessageError>}
      {products && (
        <ContainerCardsProducts>
          {products.map((product) => (
            <CardProduct key={product.id}>
              <ImgCardProduct src={product.img} />
              <NameCardProduct>{product.name}</NameCardProduct>
              <DescriptionCardProduct>
                {product.description}
              </DescriptionCardProduct>
              <h3>{product.price}</h3>
              <ButtonCardProduct>Comprar</ButtonCardProduct>
            </CardProduct>
          ))}
        </ContainerCardsProducts>
      )}
    </Container>
  );
};

export default Products;
