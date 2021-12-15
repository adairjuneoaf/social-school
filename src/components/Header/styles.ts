import styled from "styled-components";

export const Container = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 0rem;

  @media (max-width: 1024px) {
    max-width: 880px;
  }
`;

export const Content = styled.section`
  display: flex;
  justify-content: center;
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
  display: flex;
  justify-content: space-evenly;
  flex: 2;

  ul {
    display: flex;
    align-items: center;
    gap: 5rem;

    li {
      padding: 0 1rem;

      a {
        font-size: 1.125rem;
        color: var(--gray-dark);

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;

export const ContentButtons = styled.div`
  display: flex;

  button {
    font-size: 1.125rem;
    padding: 0.8rem 3rem;
    border-radius: 10rem;
    border: none;

    color: var(--default);

    background: rgb(178, 78, 255);
    background: linear-gradient(90deg, rgba(178, 78, 255, 1) 0%, rgba(245, 75, 117, 1) 100%);
  }
`;
