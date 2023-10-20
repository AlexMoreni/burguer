import { useEffect, useState } from "react";
import axios from "axios";

import {
  Container,
  FieldSearch,
  Input,
  ButtonInput,
  ContainerTitle,
  Title,
  ButtonAdd,
  ContainerCardsProducts,
  CardProduct,
  ImgCardProduct,
  NameCardProduct,
  EmphasisName,
} from "./AddProducts.style";

const AddProducts = () => {
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
        "http://localhost:3000/burguer/products",
        {
          withCredentials: true,
          params: {
            search: formData.get("search"),
          },
        }
      );
      setProducts(response.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(products);

  return (
    <Container>
      <FieldSearch onSubmit={handleSearch}>
        <Input
          type="text"
          name="search"
          placeholder="Está buscando algo?"
          autoComplete="off"
        />
        <ButtonInput type="submit" value="Buscar" />
      </FieldSearch>
      <ContainerTitle>
        <Title>Comidas e bebidas</Title>
        <ButtonAdd>+</ButtonAdd>
      </ContainerTitle>
      {messageError && <p>{messageError}</p>}
      <ContainerCardsProducts>
        {products &&
          products.map((product) => (
            <CardProduct>
              <ImgCardProduct src={product.img} />
              <NameCardProduct>
                <EmphasisName>Id:</EmphasisName> {product.id}
              </NameCardProduct>
              <NameCardProduct>
                <EmphasisName>Nome:</EmphasisName> {product.name}
              </NameCardProduct>
              <NameCardProduct>
                <EmphasisName>Descrição:</EmphasisName> {product.description}
              </NameCardProduct>
              <NameCardProduct>
                <EmphasisName>Valor:</EmphasisName> R${product.value}
              </NameCardProduct>
              <NameCardProduct>
                <EmphasisName>Categoria:</EmphasisName> {product.category}
              </NameCardProduct>
            </CardProduct>
          ))}
      </ContainerCardsProducts>
    </Container>
  );
};

export default AddProducts;
