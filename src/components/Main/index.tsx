import { GlobalStyle } from "../../styles/global";
import { AboutApp } from "../about-app";
import { AboutProject } from "../about-project";
import { AboutUs } from "../about-us";
import { Footer } from "../footer";
import { Header } from "../Header";
import { Inicial } from "../Inicial";
import { Content } from "./styles";

export function Main() {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Content>
        <Inicial />
        <AboutUs />
        <AboutApp />
        <AboutProject />
      </Content>
      <Footer />
    </>
  );
}
