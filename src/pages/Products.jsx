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
  MessageQty,
} from "./Products.style";

const Products = () => {
  const [products, setProducts] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [productsQty, setProductsQty] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/burguer/products", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.message === "Produtos encontrados!") {
          setProducts(response.data.products);
          setProductsQty(false);
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

  const handleSearch = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await axios.get(
        "http://localhost:3000/burguer/products",
        {
          withCredentials: true,
          params: {
            search: formData.get("search"),
          },
        }
      );
      setProductsQty(response.data.products.length);
      setProducts(response.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <ProductsSlide>
        <SlideTitle>Os mais vendidos</SlideTitle>
        <Slide />
      </ProductsSlide>
      <SearchField onSubmit={handleSearch}>
        <SearchInput
          type="text"
          name="search"
          placeholder="Está buscando algo?"
          autoComplete="off"
        />
        <SearchButton>BUSCAR</SearchButton>
      </SearchField>
      {messageError && <MessageError>{messageError}</MessageError>}
      {productsQty && (
        <MessageQty>Produtos encontrados: {productsQty}</MessageQty>
      )}
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
