import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.5rem 2rem;
  color: var(--title);
  background: var(--box);
  border-radius: 0.25rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    font-size: 2rem;
    display: block;
    padding-top: 1rem;
  }

  &.total {
    background: var(--secondary);
    color: var(--text-in-color);
  }
`;
