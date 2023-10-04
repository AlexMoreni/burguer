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
  return (
    <>
      {isAuth ? (
        <Header>
          <Link to="/">
            <Logo src="../../public/logo.png" alt="logo" />
          </Link>
          <ContainerLinks>
            <Link to="/">
              <LinkText>Inicio</LinkText>
            </Link>
            <Link to="/">
              <LinkText>Menu</LinkText>
            </Link>
            <Link to="/">
              <LinkText>Sair</LinkText>
            </Link>
            <Link to="/">
              <ButtonLink>Peça online</ButtonLink>
            </Link>
          </ContainerLinks>
        </Header>
      ) : (
        <Header>
          <Link to="/">
            <Logo src="../../public/logo.png" alt="logo" />
          </Link>
          <ContainerLinks>
            <Link to="/">
              <LinkText>Inicio</LinkText>
            </Link>
            <Link to="/">
              <LinkText>Menu</LinkText>
            </Link>
            <Link to="/">
              <ButtonLink>Peça online</ButtonLink>
            </Link>
          </ContainerLinks>
        </Header>
      )}
    </>
  );
};

export default Navbar;
