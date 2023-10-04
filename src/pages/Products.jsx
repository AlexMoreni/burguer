import {
  Container,
  ProductsSlide,
  SlideTitle,
  SearchField,
  SearchInput,
  SearchButton,
} from "./Products.style";
import Slide from "../components/Slide";

const Products = () => {
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
    </Container>
  );
};

export default Products;
