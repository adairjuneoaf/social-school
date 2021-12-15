import { GlobalStyle } from "../../styles/global";
import { AboutApp } from "../about-app";
import { AboutProject } from "../about-project";
import { AboutUs } from "../about-us";
import { Footer } from "../footer";
import { Header } from "../Header";
import { Inicial } from "../Inicial";
import { Content } from "./styles";

import { useWindowSize } from "../../hooks/useWindowSize";
import { MobileHeader } from "../MobileHeader";
export function Main() {
  const size = useWindowSize();
  return (
    <>
      {size?.width > 768 ? <Header /> : <MobileHeader />}
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
