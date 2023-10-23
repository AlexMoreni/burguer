import {
  FormAddProduct,
  LabelFormAddProduct,
  InputFormAddProduct,
  TextAreaFormAddProduct,
  SelectFormAddProduct,
  ButtonFormAddProduct,
  ButtonCloseFormAddProduct,
  BackgroundFormAddProduct,
} from "./FormAddAndEdit.style";

const FormAddAndEdit = ({
  nameProduct,
  descriptionProduct,
  valueProduct,
  categoryProduct,
  imgProduct,
  setNameProduct,
  setDescriptionProduct,
  setValueProduct,
  setCategoryProduct,
  setImgProduct,
  setFormAdd,
  handleBackground,
  handleNewProduct,
  handleEditProduct,
  editingProduct,
  setEditingProduct,
}) => {
  return (
    <>
      <BackgroundFormAddProduct
        onClick={() => {
          setFormAdd(false);
          handleBackground();
          setEditingProduct(false);
          setNameProduct("");
          setDescriptionProduct("");
          setValueProduct("");
          setCategoryProduct("");
          setImgProduct("");
        }}
      ></BackgroundFormAddProduct>
      <FormAddProduct
        onSubmit={editingProduct ? handleEditProduct : handleNewProduct}
      >
        <LabelFormAddProduct>
          Nome
          <InputFormAddProduct
            type="text"
            placeholder="Digite o nome do produto"
            name="name"
            onChange={(e) => setNameProduct(e.target.value)}
            value={nameProduct}
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
            value={descriptionProduct}
          ></TextAreaFormAddProduct>
        </LabelFormAddProduct>
        <LabelFormAddProduct>
          Valor
          <InputFormAddProduct
            type="number"
            placeholder="Digite o valor do produto"
            name="value"
            onChange={(e) => setValueProduct(e.target.value)}
            value={valueProduct}
          />
        </LabelFormAddProduct>
        <LabelFormAddProduct>
          Categoria:
          <SelectFormAddProduct
            name="category"
            id="category"
            onChange={(e) => setCategoryProduct(e.target.value)}
            value={categoryProduct}
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
            value={imgProduct}
          />
        </LabelFormAddProduct>
        <ButtonFormAddProduct>
          {editingProduct ? "Editar" : "Cadastrar"}
        </ButtonFormAddProduct>
        <ButtonCloseFormAddProduct
          onClick={() => {
            setFormAdd(false);
            handleBackground();
            setEditingProduct(false);
            setNameProduct("");
            setDescriptionProduct("");
            setValueProduct("");
            setCategoryProduct("");
            setImgProduct("");
          }}
        >
          x
        </ButtonCloseFormAddProduct>
      </FormAddProduct>
    </>
  );
};

export default FormAddAndEdit;
