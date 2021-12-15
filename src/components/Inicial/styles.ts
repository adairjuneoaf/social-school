import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;

    section {
      &:last-child {
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;

export const Description = styled.section`
  max-width: 450px;

  a {
    img {
      width: 40px;
    }

    & + a {
      margin-left: 1.5rem;
    }
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--gray-dark);
  }
  h3 {
    font-size: 1.5rem;
    color: var(--purple-light);
    text-align: justify;
  }
  h4 {
    font-size: 1rem;
    color: var(--blue-medium);
    text-align: justify;

    margin-bottom: 1rem;
  }

  button {
    margin-top: 2rem;

    font-size: 1.5rem;
    padding: 1rem 3rem;
    border-radius: 10rem;
    border: none;

    color: var(--default);

    background: linear-gradient(90deg, rgba(178, 78, 255, 1) 0%, rgba(245, 75, 117, 1) 100%);

    transition: all 0.3s;
  }
`;

export const Image = styled.section`
  max-width: 500px;

  img {
    width: 100%;
  }
`;

export const SocialMedia = styled.div`
  margin-top: 12rem;

  i > a > svg {
    font-size: 2rem;

    cursor: pointer;
  }

  i > a {
    color: var(--gray-default);
  }

  i {
    & + i {
      margin-left: 1rem;
    }

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
