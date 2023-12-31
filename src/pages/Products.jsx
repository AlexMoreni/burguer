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
  ValueCardProduct,
  ButtonCardProduct,
  MessageQty,
} from "./Products.style";

const Products = ({ cartQty, setCartQty }) => {
  const [products, setProducts] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [productsQty, setProductsQty] = useState(false);
  const [orderName, setOrderName] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    axios
      .get("https://api-burguer.onrender.com/burguer/products", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.message === "Produtos encontrados!") {
          setProducts(response.data.products);
          setProductsQty(false);
        }
      })
      .catch((err) => {
        console.log(err);
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
        "https://api-burguer.onrender.com/burguer/products",
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

  const handleCart = async (e) => {
    e.preventDefault();

    axios.defaults.withCredentials = true;

    const formData = new FormData(e.target);

    setOrderName(formData.get("name"));
    setDescription(formData.get("description"));
    setValue(formData.get("value"));
    setImg(formData.get("img"));
  };

  useEffect(() => {
    if (orderName !== "") {
      axios
        .post("https://api-burguer.onrender.com/burguer/shoppingcart", {
          orderName,
          description,
          value,
          img,
        })
        .then((response) => {
          if (response.data.message === "Produto Adicionado ao carrinho!") {
            setCartQty(cartQty + 1);
          }
          setOrderName("");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [orderName]);

  return (
    <Container>
      <ProductsSlide>
        <SlideTitle>Os mais vendidos</SlideTitle>
        <Slide
          img1="hamburguer-menu-home.png"
          img2="photo-login.png"
          img3="photo-register.png"
          text1="Batatas fritas e acompanhamentos"
          text2="Sanduíche de frango crocante"
          text3="Batatas fritas e acompanhamentos"
        />
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
              <ValueCardProduct>R$ {product.value}</ValueCardProduct>
              <form onSubmit={handleCart}>
                <input
                  type="text"
                  name="name"
                  value={product.name}
                  hidden
                  readOnly
                />
                <input
                  type="text"
                  name="description"
                  value={product.description}
                  hidden
                  readOnly
                />
                <input
                  type="text"
                  name="value"
                  value={product.value}
                  hidden
                  readOnly
                />
                <input
                  type="text"
                  name="img"
                  value={product.img}
                  hidden
                  readOnly
                />
                <ButtonCardProduct>Adicionar</ButtonCardProduct>
              </form>
            </CardProduct>
          ))}
        </ContainerCardsProducts>
      )}
    </Container>
  );
};

export default Products;
