import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-around;
  align-items: center;

  gap: 4rem;

  margin-top: 12rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;

    section {
      &:first-child {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;

export const DescriptionAboutUs = styled.section`
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

export const ImageAboutUs = styled.section`
  max-width: 500px;
  img {
    width: 80%;
  }
`;
