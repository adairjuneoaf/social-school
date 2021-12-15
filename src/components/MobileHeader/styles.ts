import styled from "styled-components";

export const Container = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 0rem;

  @media (max-width: 1024px) {
    max-width: 880px;
  }

  @media (max-width: 768px) {
    max-width: 640px;
  }

  @media (max-width: 425px) {
    max-width: 384px;
  }
`;

export const Content = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentLogo = styled.div`
  display: flex;
    a {
      display: flex;
      align-items: center;
      h3 {
        padding: 0 0.5rem;
        font-size: 1.5rem;
        color: var(--gray-dark);
      }
    }
    img {
      width: 48px;
    }
  }
`;

export const ContentOptions = styled.div`
  nav {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;

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

    gap: 2rem;

    padding: 0rem 1rem;

    ul {
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;
      justify-content: center;
      gap: 2rem;

      li {
        padding: 0 2rem;

        a {
          font-size: 2.5rem;
          color: var(--gray-dark);

          transition: filter 0.2s;

          &:hover {
            filter: brightness(0.9);
          }
        }
      }
    }

    button {
      font-size: 2rem;
      padding: 0.8rem 3rem;
      border-radius: 10rem;
      border: none;

      color: var(--default);

      background: rgb(178, 78, 255);
      background: linear-gradient(90deg, rgba(178, 78, 255, 1) 0%, rgba(245, 75, 117, 1) 100%);
    }
  }
`;

export const ContentButtonMenu = styled.div`
  z-index: 1000;

  button {
    display: flex;

    font-size: 2.5rem;
    padding: 0.5rem;
    border-radius: 3px;
    border: none;

    color: var(--purple-light);

    background: transparent;
  }

  cursor: pointer;
`;
