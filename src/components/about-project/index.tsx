import { DescriptionAboutProject, Grid, ImageAboutProject } from "./styles";
import ImageProject from "../../assets/project_school.svg";

export function AboutProject() {
  return (
    <Grid id="aboutproject">
      <ImageAboutProject>
        <img src={ImageProject} alt="Imagem ilustrativa sobre o projeto." />
      </ImageAboutProject>
      <DescriptionAboutProject>
        <h1>O projeto</h1>
        <h3>Um projeto de ensino desafiador que visa acessibilidade a todos!</h3>
        <p>
          O nosso projeto consiste numa <span>filosofia de ensino acessível</span> a todos com auxílio da tecnologia. Sabemos o quão
          presente é a tecnologia em nossas vidas no dia a dia, mais presente ainda são as <span>redes sociais</span>, então surge a
          social.school. Um projeto desenvolvido para de <span>ajudar você</span> com uma <span>rede social</span>. O nosso propósito é
          <span>facilitar</span> a sua maneira de aprender.
        </p>
      </DescriptionAboutProject>
    </Grid>
  );
}
