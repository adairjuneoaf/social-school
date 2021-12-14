import { AboutProject } from "../about-project";
import { AboutUs } from "../about-us";
import { Inicial } from "../Inicial";
import { Content } from "./styles";

export function Main() {
  return (
    <Content>
      <Inicial />
      <AboutUs />
      <AboutProject />
    </Content>
  );
}
