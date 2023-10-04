import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Styles
import {
  Header,
  Logo,
  ContainerLinks,
  LinkText,
  ButtonLink,
} from "./Navbar.style";

const Navbar = ({ isAuth }) => {
  const [message, setMessage] = useState("");

  const logout = () => {
    axios
      .get("http://localhost:3000/logout")
      .then((response) => {
        if (response.data.message === "Usuário deslogado") {
          document.cookie =
            "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          setMessage(response.data.message);
          return;
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  useEffect(() => {
    if (message === "Usuário deslogado") {
      window.location.href = "/";
    }
  });

  return (
    <>
      {isAuth ? (
        <Header>
          <a href="/">
            <Logo src="../../public/logo.png" alt="logo" />
          </a>
          <ContainerLinks>
            <a href="/">
              <LinkText>Inicio</LinkText>
            </a>
            <Link to="/">
              <LinkText>Menu</LinkText>
            </Link>
            <Link to="/">
              <LinkText
                onClick={() => {
                  logout();
                }}
              >
                Sair
              </LinkText>
            </Link>
            <Link to="/">
              <ButtonLink>Peça online</ButtonLink>
            </Link>
          </ContainerLinks>
        </Header>
      ) : (
        <Header>
          <a href="/">
            <Logo src="../../public/logo.png" alt="logo" />
          </a>
          <ContainerLinks>
            <a href="/">
              <LinkText>Inicio</LinkText>
            </a>
            <a href="/#menu">
              <LinkText>Menu</LinkText>
            </a>
            <Link to="/login">
              <ButtonLink>Peça online</ButtonLink>
            </Link>
          </ContainerLinks>
        </Header>
      )}
    </>
  );
};

export default Navbar;
