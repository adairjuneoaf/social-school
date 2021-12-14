import { DescriptionAboutUs, Grid, ImageAboutUs } from "./styles";
import aboutSvg from "../../assets/team.svg";

export function AboutUs() {
  return (
    <Grid>
      <ImageAboutUs>
        <img src={aboutSvg} alt="Imagem ilustrativa sobre nós." />
      </ImageAboutUs>

      <DescriptionAboutUs>
        <h1>Sobre nós</h1>
        <h3>Levar conhecimento através da tecnologia é o nosso compromisso.</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit minima eaque quis saepe rem. Saepe blanditiis perspiciatis
          iure. Consectetur labore mollitia eveniet, sint omnis maxime cum eaque blanditiis neque sapiente. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ut vel iste veniam expedita soluta, mollitia sit exercitationem odio, consequuntur tempora quis
          delectus hic. Mollitia alias officiis neque, voluptatibus minus laborum?
        </p>
      </DescriptionAboutUs>
    </Grid>
  );
}
