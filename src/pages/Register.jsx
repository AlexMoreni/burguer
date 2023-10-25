import { useNavigate } from "react-router-dom";
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

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [typeInput, setTypeInput] = useState("password");

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
      navigate("/login");
    }
  });

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
        <Img src="../../public/photo-register.png" alt="" />
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
          <FieldPassword>
            <MessageInput>
              Senha
              <Input
                type={typeInput}
                placeholder="Digite sua senha"
                onChange={(e) => setPassword(e.target.value)}
                onClick={() => changeTypeInput(typeInput)}
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
          <FieldPassword>
            <MessageInput>
              Confirme sua senha
              <Input
                type={typeInput}
                placeholder="Confirme sua senha"
                onChange={(e) => setConfirmPassword(e.target.value)}
                onClick={() => changeTypeInput(typeInput)}
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
          <ButtonForm type="submit" value="Cadastrar" />
          <MessageFormAccount>
            Você já tem uma conta?{" "}
            <Link to="/login">
              <EmphasisFormAccount>Login</EmphasisFormAccount>
            </Link>
          </MessageFormAccount>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </ContainerForm>
      </ContainerFields>
    </Container>
  );
};

export default Register;
