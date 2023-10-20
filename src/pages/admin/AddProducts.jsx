import {
  Container,
  FieldSearch,
  Input,
  ButtonInput,
  ContainerTitle,
  Title,
  ButtonAdd,
} from "./AddProducts.style";

const AddProducts = () => {
  return (
    <Container>
      <FieldSearch>
        <Input type="text" placeholder="Procurar" />
        <ButtonInput type="submit" value="Buscar" />
      </FieldSearch>
      <ContainerTitle>
        <Title>Comidas e bebidas</Title>
        <ButtonAdd>+</ButtonAdd>
      </ContainerTitle>
    </Container>
  );
};

export default AddProducts;
