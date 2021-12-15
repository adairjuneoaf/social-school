import styled from "styled-components";

export const Content = styled.main`
  max-width: 1120px;
  margin: 0 auto;

  margin-top: 10rem;

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
