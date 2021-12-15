import { DescriptionAboutUs, Grid, ImageAboutUs } from "./styles";
import aboutSvg from "../../assets/team.svg";

export function AboutUs() {
  return (
    <Grid id="aboutus">
      <ImageAboutUs>
        <img src={aboutSvg} alt="Imagem ilustrativa sobre nós." />
      </ImageAboutUs>

      <DescriptionAboutUs>
        <h1>Sobre nós</h1>
        <h3>Levar conhecimento até você com ajuda da tecnologia é o nosso compromisso.</h3>
        <p>
          A social.school é uma instituição de ensino, com objetivo de <span>facilitar</span> o ensinamento, aprendizado e boas práticas de
          estudo através da nossa <span>rede social</span>. A tecnologia é o nosso pilar para moldar as estruturas de ensino com auxílio da
          tecnologia, sabemos o quanto pode ser difícil para muitas pessoas o acesso ao <span>ensino de qualidade</span>. Seja você jovem ou
          idoso, com formação ou não, a nossa rede social de ensino <span>é para você!</span>
        </p>
      </DescriptionAboutUs>
    </Grid>
  );
}
