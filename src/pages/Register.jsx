import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  Container,
  ContainerFields,
  ContainerForm,
  MessageInput,
  Input,
  ButtonForm,
  ErrorMessage,
} from "./Register.style";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setErrorMessage("");

    axios
      .post("http://localhost:3000/register", {
        email,
        name,
        password,
        confirmPassword,
      })
      .then((response) => {
        if (response.data.message === "Usuário cadastrado!") {
          setMessage("Usuário cadastrado!");
        }
      })
      .catch(function (error) {
        if (error.response.data.error === "Preencha todos os campos") {
          setErrorMessage(error.response.data.error);
          return;
        }

        if (error.response.data.error === "Nome muito curto") {
          setErrorMessage(error.response.data.error);
          return;
        }

        if (error.response.data.error === "As senhas não coincidem") {
          setErrorMessage(error.response.data.error);
          return;
        }

        if (error.response.data.error === "Caracteres insuficientes") {
          setErrorMessage(error.response.data.error);
          return;
        }

        if (error.response.data.error === "Usuário já existe") {
          setErrorMessage(error.response.data.error);
          return;
        }
      });
  };

  useEffect(() => {
    if (message === "Usuário cadastrado!") {
      navigate("/");
    }
  });

  return (
    <Container>
      <ContainerFields>
        <img src="../../public/photo-register.png" alt="" />
        <ContainerForm onSubmit={handleRegister}>
          <img src="../../public/logo.png" alt="" />
          <MessageInput>
            E-mail
            <Input
              type="email"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </MessageInput>
          <MessageInput>
            Nome
            <Input
              type="text"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
            />
          </MessageInput>
          <MessageInput>
            Senha
            <Input
              type="password"
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </MessageInput>
          <MessageInput>
            Confirme sua senha
            <Input
              type="password"
              placeholder="Confirme sua senha"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </MessageInput>
          <ButtonForm type="submit" value="Cadastrar" />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </ContainerForm>
      </ContainerFields>
    </Container>
  );
};

export default Register;
