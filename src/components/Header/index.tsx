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
              <a href="#aboutus">Sobre nós</a>
            </li>
            <li>
              <a href="#aboutapp">Sobre o app</a>
            </li>
            <li>
              <a href="#aboutproject">O projeto</a>
            </li>
          </ul>
          <a href="/login">
            <motion.button whileHover={{ scale: 0.95, transition: { duration: 0.3 } }}>Sou educador</motion.button>
          </a>
        </nav>
      </Content>
    </Container>
  );
}
