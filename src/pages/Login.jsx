import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible } from "react-icons/ai";

import {
  Container,
  ContainerFields,
  Img,
  ContainerForm,
  MessageInput,
  Input,
  ButtonForm,
  ErrorMessage,
  MessageFormAccount,
  EmphasisFormAccount,
  EyePassword,
  FieldPassword,
} from "./RegisterAndLogin.style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [typeInput, setTypeInput] = useState("password");

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");

    axios.defaults.withCredentials = true;

    axios
      .post("https://api-burguer.onrender.com/login", {
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
      window.location.href = "/";
    }
  }, []);

  const changeTypeInput = (type) => {
    if (type === "password") {
      setTypeInput("text");
    } else {
      setTypeInput("password");
    }
  };

  return (
    <Container>
      <ContainerFields>
        <Img src="/photo-login.png" alt="" />
        <ContainerForm onSubmit={handleLogin}>
          <img src="/logo.png" alt="" />
          <MessageInput>
            E-mail
            <Input
              type="email"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </MessageInput>
          <FieldPassword>
            <MessageInput>
              Senha
              <Input
                type={typeInput}
                placeholder="Digite sua senha"
                onChange={(e) => setPassword(e.target.value)}
              />
            </MessageInput>
            {
              <EyePassword>
                <AiFillEyeInvisible
                  onClick={() => {
                    changeTypeInput(typeInput);
                  }}
                />
              </EyePassword>
            }
          </FieldPassword>
          <ButtonForm type="submit" value="Entrar" />
          <MessageFormAccount>
            Você ainda não tem uma conta?{" "}
            <Link to="/register">
              <EmphasisFormAccount>Registre-se</EmphasisFormAccount>
            </Link>
          </MessageFormAccount>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </ContainerForm>
      </ContainerFields>
    </Container>
  );
};

export default Login;
