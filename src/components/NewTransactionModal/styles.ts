import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 600;
    color: var(--title);
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
  }

  input {
    background: var(--input-bg);
    padding: 0 1.5rem;
    font-size: 1rem;
    height: 4rem;
    color: var(--title);
    border: 1px solid var(--border);
    border-radius: 0.25rem;
    transition: border 0.1s;

    &::placeholder {
      color: var(--text);
    }

    & + input {
      margin-top: 1rem;
    }

    &:focus {
      border-bottom: 2px solid var(--secondary);
    }

    &.error {
      border-bottom-color: var(--red);
    }
  }

  & > button {
    font-size: 1.1rem;
    padding: 0 1.5rem;
    height: 4rem;
    margin-top: 1.5rem;
    border: none;
    border-radius: 0.25rem;
    background: var(--secondary);
    color: var(--text-in-color);
    transition: filter 0.1s;

    &:hover {
      filter: brightness(0.95);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  button {
    font-size: 1rem;
    height: 4rem;
    margin: 1rem 0;
    border: solid 1px var(--border);
    border-radius: 0.25rem;
    background: transparent;
    transition: 0.1s;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin-right: 1rem;
    }

    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }

    &.deposit {
      background: ${transparentize(0.9, '#33cc95')};
      border-color: ${transparentize(0.5, '#33cc95')};
      cursor: default;
    }

    &.withdraw {
      background: ${transparentize(0.9, '#e52e4d')};
      border-color: ${transparentize(0.6, '#e52e4d')};
      cursor: default;
    }
  }
`;
