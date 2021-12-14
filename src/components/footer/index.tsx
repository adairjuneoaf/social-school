import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Container, Content, DescriptionFooter, SocialMedia } from "./styles";
import ImageAppStore from "../../assets/app-store.svg";
import ImagePlayStore from "../../assets/google-play.svg";

export function Footer() {
  return (
    <Container>
      <Content>
        <DescriptionFooter>
          <h2>Muito obrigado pela sua visita!</h2>
          <h4>Siga-nos nas nossas redes sociais e fique por dentro de todas as nossas atualizações.</h4>

          <a href="/" target="_blank">
            <img src={ImagePlayStore} alt="Baixar app social school na play store." title="Baixar app na Play Store" />
          </a>
          <a href="/">
            <img src={ImageAppStore} alt="Baixar app social school na app store." title="Baixar app na Apple Store" />
          </a>
        </DescriptionFooter>

        <SocialMedia>
          <i>
            <a href="/">
              <FaInstagram />
            </a>
          </i>
          <i>
            <a href="/">
              <FaFacebookF />
            </a>
          </i>
          <i>
            <a href="/">
              <FaTwitter />
            </a>
          </i>
          <i>
            <a href="/">
              <FaLinkedinIn />
            </a>
          </i>
        </SocialMedia>
      </Content>

      <h4 className="creditos">
        Feito com <span>&#10084;</span> por <a href="https://portfolio.prismasystems.com.br/">Adair Juneo</a>
      </h4>
    </Container>
  );
}
