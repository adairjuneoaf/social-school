import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --white-default: #FFFFFF;
    --tiger-lily: #A5331D;
    --ivory: #E0D5CC;
    --carafe: #836143;
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

body{
    background: var(--ivory);
    -webkit-font-smoothing: antialiased;
    color: var(--tiger-lily);
}

body, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
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
