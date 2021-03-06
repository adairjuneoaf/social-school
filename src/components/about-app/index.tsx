import { CardsAboutApp, Container, DescriptionAboutApp, Grid, ImageAboutApp } from "./styles";
import ImageApp from "../../assets/app.svg";
import ImagePodcast from "../../assets/podcast.svg";
import ImageTimeStudy from "../../assets/time-study.svg";
import ImageDirectMessage from "../../assets/direct-message.svg";
import ImageVideoClass from "../../assets/video-class.svg";
import ImageAssessments from "../../assets/assessments.svg";
import ImageTasks from "../../assets/tasks.svg";

import { motion } from "framer-motion";

export function AboutApp() {
  return (
    <Container id="aboutapp">
      <Grid>
        <DescriptionAboutApp className="section-description">
          <h1>Sobre o app</h1>
          <p>
            O app oferece a você <span>estudante</span> ou <span>educador</span>, o poder de aprender ou ensinar de maneira fácil e eficaz.
            Contamos com <span>diversas ferramentas</span> para auxiliar você no momento de aprendizado. Para você educador, após nossa
            análise de cadastro, temos uma <span>plataforma completa</span>, com os melhores recursos a sua disposição, ensinar nunca foi
            tão fácil.
          </p>
        </DescriptionAboutApp>

        <ImageAboutApp className="section-image">
          <img src={ImageApp} alt="Ilustração do app Social School" />
        </ImageAboutApp>
      </Grid>
      <CardsAboutApp className="section-cards">
        <motion.div whileHover={{ scale: 0.98, transition: { duration: 0.2 } }}>
          <img src={ImagePodcast} alt="Função podcast do App." />
          <h2>Podcasts</h2>
          <p>Escolha o tema, dê o play e ouça com atenção. Obtenha acesso a vários Podcasts dos melhores educadores ao redor do mundo.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 0.98, transition: { duration: 0.2 } }}>
          <img src={ImageTimeStudy} alt="Função tempo de estudo do App." />
          <h2>Rotinas de Estudo</h2>
          <p>Crie a sua rotina de estudos, escolha os melhores horários, temas e consuma muito conteúdo com a constância.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 0.98, transition: { duration: 0.2 } }}>
          <img src={ImageDirectMessage} alt="Função direct message do App" />
          <h2>Mensagens Diretas</h2>
          <p>Surgiu uma dúvida? Ou curiosidade? Entre em contato diretamente com o educador que desejar, a qualquer momento.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 0.98, transition: { duration: 0.2 } }}>
          <img src={ImageVideoClass} alt="Função vídeo aula do App" />
          <h2>Video Aulas</h2>
          <p>Não só de áudio vivemos. Tenha acesso também há diversas video aulas dos mais variados temas.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 0.98, transition: { duration: 0.2 } }}>
          <img src={ImageAssessments} alt="Função feedback do App" />
          <h2>Feedback de Educadores</h2>
          <p>A excelência é o nosso objetivo, portanto aprenda com os melhores. Feedbacks chegam a todo tempo dos nossos educadores.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 0.98, transition: { duration: 0.2 } }}>
          <img src={ImageTasks} alt="Função tarefas e desafios do App" />
          <h2>Tarefas Diárias</h2>
          <p>
            Com a sua rotina, podemos te ajudar há encarar os maiores desafios. Conte com tarefas diárias e desafios que te levarão há outro
            nível.
          </p>
        </motion.div>
      </CardsAboutApp>
    </Container>
  );
}
