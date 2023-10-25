import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

//Styles
import {
  Header,
  Logo,
  ContainerLinks,
  LinkText,
  ButtonLink,
  Cart,
  BallNotiCart,
  HamburguerMenu,
  Bar,
  MobileMenu,
  LinkTextMobile,
} from "./Navbar.style";

const Navbar = ({ isAuth, cartQty }) => {
  const [message, setMessage] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
            <Link to="/products">
              <LinkText>Menu</LinkText>
            </Link>
            <Link to="/orders">
              <LinkText>Pedidos</LinkText>
            </Link>
            <Link to="/panel">
              <LinkText>Painel</LinkText>
            </Link>
            <Link to="/login">
              <LinkText
                onClick={() => {
                  logout();
                }}
              >
                Sair
              </LinkText>
            </Link>
            <Link to="/products">
              <ButtonLink>Peça online</ButtonLink>
            </Link>
            {cartQty && (
              <Link to="/shoppingcart">
                <Cart>
                  <BsCart3 />
                  {cartQty && <BallNotiCart>{cartQty}</BallNotiCart>}
                </Cart>
              </Link>
            )}
          </ContainerLinks>
          <HamburguerMenu onClick={toggleMobileMenu}>
            <Bar className="bar"></Bar>
            <Bar className="bar"></Bar>
            <Bar className="bar"></Bar>
          </HamburguerMenu>
          {isMobileMenuOpen && (
            <MobileMenu isOpen={isMobileMenuOpen}>
              <a href="/">
                <LinkTextMobile>Inicio</LinkTextMobile>
              </a>
              <Link to="/products">
                <LinkTextMobile>Menu</LinkTextMobile>
              </Link>
              <Link to="/orders">
                <LinkTextMobile>Pedidos</LinkTextMobile>
              </Link>
              <Link to="/panel">
                <LinkTextMobile>Painel</LinkTextMobile>
              </Link>
              <Link to="/login">
                <LinkTextMobile
                  onClick={() => {
                    logout();
                  }}
                >
                  Sair
                </LinkTextMobile>
              </Link>
              <Link to="/products">
                <LinkTextMobile>Peça online</LinkTextMobile>
              </Link>
              <Link to="/shoppingcart">
                <LinkTextMobile>Carrinho de compras</LinkTextMobile>
              </Link>
            </MobileMenu>
          )}
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
          <HamburguerMenu onClick={toggleMobileMenu}>
            <Bar className="bar"></Bar>
            <Bar className="bar"></Bar>
            <Bar className="bar"></Bar>
          </HamburguerMenu>
          {isMobileMenuOpen && (
            <MobileMenu isOpen={isMobileMenuOpen}>
              <a href="/">
                <LinkTextMobile>Inicio</LinkTextMobile>
              </a>
              <a href="/#menu">
                <LinkTextMobile>Menu</LinkTextMobile>
              </a>
              <Link to="/login">
                <LinkTextMobile>Peça online</LinkTextMobile>
              </Link>
            </MobileMenu>
          )}
        </Header>
      )}
    </>
  );
};

export default Navbar;
