import styled from "styled-components";

export const Container = styled.div`
  margin-top: 12rem;
  margin-bottom: 2rem;
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;

    section {
      &:last-child {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;

export const DescriptionAboutApp = styled.section`
  max-width: 450px;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--gray-dark);
    text-align: justify;

    border-right: 8px solid var(--purple-light);
  }
  h3 {
    font-size: 1.5rem;
    color: var(--purple-light);
    text-align: justify;
  }
  p {
    font-size: 1.125rem;
    color: var(--blue-medium);
    text-align: justify;
  }
`;

export const ImageAboutApp = styled.section`
  max-width: 500px;
  img {
    width: 80%;
  }
`;

export const CardsAboutApp = styled.section`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  grid-template-areas:
    ". . ."
    ". . .";

  justify-content: center;
  justify-items: center;
  align-items: center;

  margin-top: 8rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }

  div {
    width: 100%;
    height: 200px;
    border-bottom: 8px solid var(--purple-light);

    text-align: center;

    cursor: context-menu;

    img {
      height: 64px;
    }

    h2 {
      font-size: 2rem;
      color: var(--purple-light);
    }

    p {
    }
    font-size: 1.125rem;
    color: var(--blue-medium);
  }

  @media (max-width: 1024px) {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 1rem;
    grid-template-areas:
      ". ."
      ". ."
      ". .";
  }

  @media (max-width: 768px) {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 2rem;
    grid-template-areas:
      "."
      "."
      "."
      "."
      "."
      ".";
  }
`;
