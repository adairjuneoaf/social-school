import { Description, Grid, Image, SocialMedia } from "./styles";
import imgSmartphone from "../../assets/smartphone_school.svg";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export function Inicial() {
  return (
    <>
      <Grid>
        <Description>
          <h1>Sua rede social escolar preferida</h1>
          <h3>Se conecte agora e aprenda com todos!</h3>
          <h4>O seu app preferido quando assunto é estudos e tecnologia.</h4>

          <motion.button whileHover={{ scale: 0.95 }}>Saiba mais</motion.button>
        </Description>

        <Image>
          <img src={imgSmartphone} alt="Ilustração app social school Smartphone" />
        </Image>
      </Grid>

      <SocialMedia>
        <i>
          <a href="/">
            <FaTwitter />
          </a>
        </i>
        <i>
          <a href="/">
            <FaLinkedinIn />
          </a>
        </i>
        <i>
          <a href="/">
            <FaFacebookF />
          </a>
        </i>
        <i>
          <a href="/">
            <FaInstagram />
          </a>
        </i>
      </SocialMedia>
    </>
  );
}
