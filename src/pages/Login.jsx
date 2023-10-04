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
} from "./RegisterAndLogin.style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");

    axios
      .post("http://localhost:3000/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.message === "Login realizado com sucesso!") {
          setMessage("Login realizado com sucesso!");
        }
      })
      .catch(function (error) {
        if (error.response.data.error === "Preencha todos os campos") {
          setErrorMessage(error.response.data.error);
          return;
        }

        if (error.response.data.error === "Usuário não encontrado") {
          setErrorMessage(error.response.data.error);
          return;
        }

        if (error.response.data.error === "Senha incorreta") {
          setErrorMessage(error.response.data.error);
          return;
        }
      });
  };

  useEffect(() => {
    if (message === "Login realizado com sucesso!") {
      navigate("/");
    }
  });

  return (
    <Container>
      <ContainerFields>
        <img src="../../public/photo-login.png" alt="" />
        <ContainerForm onSubmit={handleLogin}>
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
            Senha
            <Input
              type="password"
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </MessageInput>
          <ButtonForm type="submit" value="Entrar" />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </ContainerForm>
      </ContainerFields>
    </Container>
  );
};

export default Login;
