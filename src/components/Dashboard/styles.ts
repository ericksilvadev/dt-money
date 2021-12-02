import styled from 'styled-components';

export const Container = styled.main`
  margin-top: -4.5rem;
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  .no-transactions {
    text-align: center;
    color: var(--text);
    font-size: 1.2rem;
  }
`;

export const SumaryContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;
