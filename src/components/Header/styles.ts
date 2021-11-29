import styled from 'styled-components';

export const Container = styled.header`
  background: var(--primary);
  padding: 2rem;
  height: 16rem;
`;
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: var(--text-in-color);
    background: var(--primary-light);
    border: none;
    border-radius: 0.25rem;
    padding: 0.6rem 2rem;
    transition: 0.1s;

    &:hover {
      filter: brightness(0.95);
    }
  }
`;
