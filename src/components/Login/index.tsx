import { GlobalStyle } from "../../styles/global";
import { Container, Content, FormLogin } from "./styles";

import logo from "../../assets/logo.svg";
import { motion } from "framer-motion";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Login() {
  const loginWarning = () => toast("Ambiente de login ainda não finalizado!");

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Container>
        <Content>
          <a href="/">
            <img src={logo} alt="Logo social.school" />
            <h3>social.school</h3>
          </a>
          <h2>Plataforma de Educadores</h2>
          <FormLogin>
            <label htmlFor="email">E-mail</label>
            <motion.input type="email" whileFocus={{ opacity: 1, transition: { duration: 0.2 } }} required />
            <label htmlFor="password">Senha</label>
            <motion.input type="password" whileFocus={{ opacity: 1, transition: { duration: 0.2 } }} required />

            <motion.button whileHover={{ scale: 0.96, transition: { duration: 0.2 } }} onClick={loginWarning}>
              Entrar
            </motion.button>
          </FormLogin>
        </Content>
      </Container>
      <GlobalStyle />
    </>
  );
}
