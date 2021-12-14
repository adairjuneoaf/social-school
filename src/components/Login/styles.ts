import styled from "styled-components";

export const Container = styled.main`
  overflow: hidden;
  max-width: 550px;
  margin: 0 auto;
`;
export const Content = styled.section`
  margin-top: 8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 2rem;

  border: 3px solid var(--purple-light);
  border-radius: 1.5rem;

  width: 100%;
  height: 550px;

  a {
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
      width: 48px;
    }

    h3 {
      margin-left: 0.5rem;
      font-size: 1.5rem;
      color: var(--gray-dark);
    }
  }
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;

  width: 300px;

  label {
    margin-top: 1rem;
    color: var(--gray-dark);
    opacity: 0.6;
  }
  button {
    margin-top: 1.5rem;
    font-size: 1.5rem;
    border: none;
    outline: none;
    border-radius: 0.375rem;
    padding: 0.5rem 0;

    color: var(--default);

    background: rgb(178, 78, 255);
    background: linear-gradient(90deg, rgba(178, 78, 255, 1) 0%, rgba(245, 75, 117, 1) 100%);
  }

  input {
    font-size: 1.5rem;
    border: none;
    outline: none;
    //border-radius: 0.375rem;
    opacity: 0.5;

    background: transparent;

    border-bottom: 2px solid var(--purple-light);
  }
`;
