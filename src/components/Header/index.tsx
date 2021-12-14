import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

import { motion } from "framer-motion";

export function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <ul>
            <div>
              <a href="/">
                <img src={logo} alt="Logo social.school" />
                <h3>social.school</h3>
              </a>
            </div>
            <li>
              <a href="/">Sobre nós</a>
            </li>
            <li>
              <a href="/">O projeto</a>
            </li>
            <li>
              <a href="/">Sobre o app</a>
            </li>
          </ul>
          <motion.button whileHover={{ scale: 0.95 }}>Sou educador</motion.button>
        </nav>
      </Content>
    </Container>
  );
}
