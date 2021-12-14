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
        <h3>Levar conhecimento através da tecnologia é o nosso compromisso.</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit minima eaque quis saepe rem. Saepe blanditiis perspiciatis
          iure. Consectetur labore mollitia eveniet, sint omnis maxime cum eaque blanditiis neque sapiente. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ut vel iste veniam expedita soluta, mollitia sit exercitationem odio, consequuntur tempora quis
          delectus hic. Mollitia alias officiis neque, voluptatibus minus laborum?
        </p>
      </DescriptionAboutProject>
    </Grid>
  );
}
