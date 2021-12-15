import logo from "../../assets/logo.svg";
import { Container, Content, ContentButtons, ContentLogo, ContentOptions } from "./styles";

import { motion } from "framer-motion";

export function Header() {
  return (
    <Container>
      <Content>
        <ContentLogo>
          <a href="/">
            <img src={logo} alt="Logo social.school" />
            <h3>social.school</h3>
          </a>
        </ContentLogo>
        <ContentOptions>
          <ul>
            <li>
              <a href="#aboutus">Sobre nós</a>
            </li>
            <li>
              <a href="#aboutapp">Sobre o app</a>
            </li>
            <li>
              <a href="#aboutproject">O projeto</a>
            </li>
          </ul>
        </ContentOptions>

        <ContentButtons>
          <a href="/login">
            <motion.button whileHover={{ scale: 0.95, transition: { duration: 0.3 } }}>Sou educador</motion.button>
          </a>
        </ContentButtons>
      </Content>
    </Container>
  );
}
