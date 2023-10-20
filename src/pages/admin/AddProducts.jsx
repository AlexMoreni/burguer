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
  FormAddProduct,
  LabelFormAddProduct,
  InputFormAddProduct,
  TextAreaFormAddProduct,
  SelectFormAddProduct,
  ButtonFormAddProduct,
  ButtonCloseFormAddProduct,
  BackgroundFormAddProduct,
} from "./AddProducts.style";

const AddProducts = () => {
  const [products, setProducts] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [formAdd, setFormAdd] = useState(false);
  const [nameProduct, setNameProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [valueProduct, setValueProduct] = useState("");
  const [categoryProduct, setCategoryProduct] = useState("");
  const [imgProduct, setImgProduct] = useState();

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
  }, [formAdd]);

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

  const handleBackground = (value) => {
    window.scrollTo(0, 0);

    if (value === "ativar") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleNewProduct = (e) => {
    e.preventDefault();

    axios.defaults.withCredentials = true;

    axios
      .post("http://localhost:3000/burguer/newproduct", {
        name: nameProduct,
        description: descriptionProduct,
        value: valueProduct,
        category: categoryProduct,
        img: imgProduct,
      })
      .then((response) => {
        if (response.data.message === "Produto cadastrado!") {
          setFormAdd(false);
          handleBackground();
        }
      })
      .catch((err) => console.log(err));
  };

  console.log(products);

  return (
    <Container id="container">
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
        <ButtonAdd
          onClick={() => {
            handleBackground("ativar");
            setFormAdd(true);
          }}
        >
          +
        </ButtonAdd>
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
      {formAdd && (
        <>
          <BackgroundFormAddProduct
            onClick={() => {
              setFormAdd(false);
              handleBackground();
            }}
          ></BackgroundFormAddProduct>
          <FormAddProduct onSubmit={handleNewProduct}>
            <LabelFormAddProduct>
              Nome
              <InputFormAddProduct
                type="text"
                placeholder="Digite o nome do produto"
                name="name"
                onChange={(e) => setNameProduct(e.target.value)}
              />
            </LabelFormAddProduct>
            <LabelFormAddProduct>
              Descrição
              <TextAreaFormAddProduct
                name="description"
                placeholder="Digite a descrição do produto"
                cols="30"
                rows="3"
                onChange={(e) => setDescriptionProduct(e.target.value)}
              ></TextAreaFormAddProduct>
            </LabelFormAddProduct>
            <LabelFormAddProduct>
              Valor
              <InputFormAddProduct
                type="number"
                placeholder="Digite o valor do produto"
                name="value"
                onChange={(e) => setValueProduct(e.target.value)}
              />
            </LabelFormAddProduct>
            <LabelFormAddProduct>
              Categoria:
              <SelectFormAddProduct
                name="category"
                id="category"
                onChange={(e) => setCategoryProduct(e.target.value)}
              >
                <option value="" hidden></option>
                <option value="hambúrgueres">Hambúrguer</option>
                <option value="acompanhamento">Acompanhamento</option>
                <option value="bebida">Bebida</option>
                <option value="sobremesa">Sobremesa</option>
                <option value="salada">Salada</option>
              </SelectFormAddProduct>
            </LabelFormAddProduct>
            <LabelFormAddProduct>
              URL
              <InputFormAddProduct
                type="text"
                placeholder="URL da imagem"
                name="img"
                onChange={(e) => setImgProduct(e.target.value)}
              />
            </LabelFormAddProduct>
            <ButtonFormAddProduct>Cadastrar</ButtonFormAddProduct>
            <ButtonCloseFormAddProduct
              onClick={() => {
                setFormAdd(false);
                handleBackground();
              }}
            >
              x
            </ButtonCloseFormAddProduct>
          </FormAddProduct>
        </>
      )}
    </Container>
  );
};

export default AddProducts;
