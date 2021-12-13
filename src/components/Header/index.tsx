import logo from "../../assets/logo.svg";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
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
        <button>Sou educador</button>
      </nav>
    </Container>
  );
}
