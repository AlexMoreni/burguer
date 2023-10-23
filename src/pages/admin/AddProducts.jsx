import { useEffect, useState } from "react";
import axios from "axios";

import { BsFillPencilFill } from "react-icons/bs";

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
  Update,
} from "./AddProducts.style";

import FormAddAndEdit from "../../components/FormAddAndEdit";

const AddProducts = () => {
  const [products, setProducts] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [formAdd, setFormAdd] = useState(false);
  const [idProduct, setIdProduct] = useState(0);
  const [nameProduct, setNameProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [valueProduct, setValueProduct] = useState("");
  const [categoryProduct, setCategoryProduct] = useState("");
  const [imgProduct, setImgProduct] = useState();
  const [editingProduct, setEditingProduct] = useState(false);

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

  const handleGetProductEdit = (id) => {
    setFormAdd(true);
    handleBackground("ativar");

    axios.defaults.withCredentials = true;

    axios
      .post("http://localhost:3000/burguer/getproductedit", {
        id,
      })
      .then((response) => {
        if (response.data.message === "Produto encontrado!") {
          const product = response.data.product;

          setIdProduct(product.id);
          setNameProduct(product.name);
          setDescriptionProduct(product.description);
          setValueProduct(product.value);
          setCategoryProduct(product.category);
          setImgProduct(product.img);
          setEditingProduct(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleEditProduct = (e) => {
    e.preventDefault();

    axios.defaults.withCredentials = true;

    axios
      .post("http://localhost:3000/burguer/editproduct", {
        id: idProduct,
        name: nameProduct,
        description: descriptionProduct,
        value: valueProduct,
        category: categoryProduct,
        img: imgProduct,
      })
      .then((response) => {
        if (response.data.message === "Produto atualizado!!") {
          setFormAdd(false);
          handleBackground();
        }
      })
      .catch((err) => console.log(err));
  };

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
            <CardProduct key={product.id}>
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
              <Update>
                <BsFillPencilFill
                  onClick={() => {
                    handleGetProductEdit(product.id);
                  }}
                />
              </Update>
            </CardProduct>
          ))}
      </ContainerCardsProducts>
      {formAdd && (
        <FormAddAndEdit
          nameProduct={nameProduct}
          descriptionProduct={descriptionProduct}
          valueProduct={valueProduct}
          categoryProduct={categoryProduct}
          imgProduct={imgProduct}
          setNameProduct={setNameProduct}
          setDescriptionProduct={setDescriptionProduct}
          setValueProduct={setValueProduct}
          setCategoryProduct={setCategoryProduct}
          setImgProduct={setImgProduct}
          setFormAdd={setFormAdd}
          handleBackground={handleBackground}
          handleNewProduct={handleNewProduct}
          handleEditProduct={handleEditProduct}
          editingProduct={editingProduct}
          setEditingProduct={setEditingProduct}
        />
      )}
    </Container>
  );
};

export default AddProducts;
