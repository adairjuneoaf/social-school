import logo from "../../assets/logo.svg";
import { Container, Content, ContentButtonMenu, ContentLogo, ContentOptions } from "./styles";

import { FiMenu, FiX } from "react-icons/fi";

import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  open: { opacity: 1, y: 0 },
  close: { opacity: 0, y: "100%" },
};

export function MobileHeader() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container>
      <Content>
        <ContentLogo>
          <a href="/">
            <img src={logo} alt="Logo social.school" />
            <h3>social.school</h3>
          </a>
        </ContentLogo>

        <ContentButtonMenu>
          <motion.button onClick={() => setShowMenu((showMenu) => !showMenu)}>{showMenu ? <FiX /> : <FiMenu />}</motion.button>
        </ContentButtonMenu>
      </Content>
      <ContentOptions>
        <motion.nav animate={showMenu ? "open" : "close"} variants={variants} transition={{ duration: 0.5 }}>
          <ul>
            <li>
              <a href="#aboutus" onClick={() => setShowMenu((showMenu) => !showMenu)}>
                Sobre nós
              </a>
            </li>
            <li>
              <a href="#aboutapp" onClick={() => setShowMenu((showMenu) => !showMenu)}>
                Sobre o app
              </a>
            </li>
            <li>
              <a href="#aboutproject" onClick={() => setShowMenu((showMenu) => !showMenu)}>
                O projeto
              </a>
            </li>
          </ul>

          <a href="/login">
            <motion.button whileHover={{ scale: 0.95, transition: { duration: 0.3 } }} onClick={() => setShowMenu((showMenu) => !showMenu)}>
              Sou educador
            </motion.button>
          </a>
        </motion.nav>
      </ContentOptions>
    </Container>
  );
}
