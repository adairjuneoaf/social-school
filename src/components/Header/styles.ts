import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 1.5rem 15rem;
  position: fixed;

  top: 0;
  left: 0;

  background-image: linear-gradient(rgba(250, 238, 227, 0.98), rgb(224, 213, 204));
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5rem;

      li {
        padding: 0 1rem;

        a {
          font-size: 1.125rem;
          color: var(--tiger-lily);

          transition: filter 0.2s;

          &:hover {
            filter: brightness(0.9);
          }
        }
      }
      div {
        a {
          display: flex;
          align-items: center;
          h3 {
            font-size: 1.5rem;
            color: var(--tiger-lily);
          }
        }
        img {
          width: 48px;
        }
      }
    }
    button {
      font-size: 1.125rem;
      padding: 1rem;
      border-radius: 0.375rem;
      border: none;

      color: var(--white-default);

      background-color: var(--tiger-lily);

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
