import styled from "styled-components";

export const Container = styled.footer`
  margin-top: 8rem;
  color: var(--default);

  background: linear-gradient(90deg, rgba(178, 78, 255, 1) 0%, rgba(245, 75, 117, 1) 100%);

  .creditos {
    text-align: center;
    margin-bottom: 2rem;

    a {
      color: var(--default);

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }

    span {
      color: red;
    }
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1200px;
  gap: 1rem;
  margin: 0 auto;

  padding: 2rem 0;

  @media (max-width: 1024px) {
    max-width: 880px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SocialMedia = styled.div`
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
    justify-content: space-between;
  }
`;

export const DescriptionFooter = styled.div`
  h3,
  h4 {
    margin-bottom: 1rem;
  }

  a {
    img {
      width: 40px;
    }

    & + a {
      margin-left: 1.5rem;
    }
  }
`;
