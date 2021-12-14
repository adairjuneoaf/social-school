import { Description, Grid, Image, SocialMedia } from "./styles";
import imgSmartphone from "../../assets/smartphone_school.svg";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ImageAppStore from "../../assets/app-store.svg";
import ImagePlayStore from "../../assets/google-play.svg";

import { motion } from "framer-motion";

export function Inicial() {
  return (
    <>
      <Grid>
        <Description>
          <h1>Sua rede social escolar preferida</h1>
          <h3>Se conecte agora e aprenda com todos!</h3>
          <h4>Baixe agora o app nas principais lojas de aplicativos. O seu app preferido quando assunto é estudos e tecnologia.</h4>

          <a href="/" target="_blank">
            <motion.img
              whileHover={{ scale: 0.95, transition: { duration: 0.5 } }}
              src={ImagePlayStore}
              alt="Baixar app social school na play store."
              title="Baixar app na Play Store"
            />
          </a>
          <a href="/">
            <motion.img
              whileHover={{ scale: 0.95, transition: { duration: 0.5 } }}
              src={ImageAppStore}
              alt="Baixar app social school na app store."
              title="Baixar app na Apple Store"
            />
          </a>
        </Description>

        <Image>
          <img src={imgSmartphone} alt="Ilustração app social school Smartphone" />
        </Image>
      </Grid>

      <SocialMedia>
        <i>
          <a href="/">
            <FaInstagram />
          </a>
        </i>
        <i>
          <a href="/">
            <FaFacebookF />
          </a>
        </i>
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
      </SocialMedia>
    </>
  );
}
