import {
  Container,
  TitlePayment,
  ImgPayment,
  AddressTitle,
} from "./Payment.style";

const Payment = () => {
  return (
    <Container>
      <TitlePayment>Pagamento</TitlePayment>
      <ImgPayment src="../../public/qrcode.png" alt="" />
      <AddressTitle>Selecione o endereço</AddressTitle>
    </Container>
  );
};

export default Payment;
