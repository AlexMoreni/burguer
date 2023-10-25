import { Link } from "react-router-dom";

import {
  ContainerFooter,
  ContentFooter,
  ContainerFooterMore,
  TitleFooter,
  LinkFooter,
  SocialMediaFooter,
} from "./Footer.style";

const Footer = () => {
  return (
    <ContainerFooter>
      <ContentFooter>
        <img
          style={{ width: "145px" }}
          src="/logo-footer.png"
          alt="Logo-Burguer"
        />
        <ContainerFooterMore>
          <TitleFooter>Mais</TitleFooter>
          <Link to="/">
            <LinkFooter>Sobre nós</LinkFooter>
          </Link>
          <Link to="/">
            <LinkFooter>Menu</LinkFooter>
          </Link>
          <Link to="/">
            <LinkFooter>Localização</LinkFooter>
          </Link>
        </ContainerFooterMore>
        <div>
          <TitleFooter>Redes Sociais</TitleFooter>
          <SocialMediaFooter>
            <img src="/facebook.svg" alt="Facebook" />
            <img src="/whatsApp.svg" alt="WhatsApp" />
            <img src="/instagram.svg" alt="Instagram" />
          </SocialMediaFooter>
        </div>
      </ContentFooter>
    </ContainerFooter>
  );
};

export default Footer;
