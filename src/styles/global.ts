import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --default: #FFFFFF;
    --white-default: #E4ECFE;
    --gray-dark: #383838;
    --purple-light: #C84ED3;
    --blue-medium: #00005D;
    --blue-green: #009BAE;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    overflow-x: hidden;
}

html{
    @media (min-width: 1080px) {
        font-size: 93.75%;
    }

    @media (min-width: 720px) {
        font-size: 87.5%;
    }
}

#root{
    -webkit-font-smoothing: antialiased;
    color: var(--gray-dark);

    background: -moz-linear-gradient(
    60.74% 113.1% 106.88deg,
    rgba(228, 236, 254, 1) 11.99%,
    rgba(235, 241, 254, 1) 46.74%,
    rgba(253, 254, 255, 1) 95.82%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -webkit-linear-gradient(
    106.88deg,
    rgba(228, 236, 254, 1) 11.99%,
    rgba(235, 241, 254, 1) 46.74%,
    rgba(253, 254, 255, 1) 95.82%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -webkit-gradient(
    linear,
    60.74% 113.1%,
    39.33% -12.67%,
    color-stop(0.1199, rgba(228, 236, 254, 1)),
    color-stop(0.4674, rgba(235, 241, 254, 1)),
    color-stop(0.9582, rgba(253, 254, 255, 1)),
    color-stop(1, rgba(255, 255, 255, 1))
  );
  background: -o-linear-gradient(
    106.88deg,
    rgba(228, 236, 254, 1) 11.99%,
    rgba(235, 241, 254, 1) 46.74%,
    rgba(253, 254, 255, 1) 95.82%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -ms-linear-gradient(
    106.88deg,
    rgba(228, 236, 254, 1) 11.99%,
    rgba(235, 241, 254, 1) 46.74%,
    rgba(253, 254, 255, 1) 95.82%,
    rgba(255, 255, 255, 1) 100%
  );
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#E4ECFE', endColorstr='#FFFFFF' ,GradientType=0)";
  background: linear-gradient(
    -16.88deg,
    rgba(228, 236, 254, 1) 11.99%,
    rgba(235, 241, 254, 1) 46.74%,
    rgba(253, 254, 255, 1) 95.82%,
    rgba(255, 255, 255, 1) 100%
  );
  
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#E4ECFE',endColorstr='#FFFFFF' , GradientType=1);
height: 100vh;
}

body, button{
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
}

h1, h2, h3, h4, h5, h6, strong{
    font-family: 'Nunito', sans-serif;
    font-weight: 800;
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
}

[disable]{
    opacity: 0.6;
    cursor: not-allowed;
}
`;
