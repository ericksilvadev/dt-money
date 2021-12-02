import styled from 'styled-components';

export const Container = styled.div`
  margin: 3rem 0;
  table {
    width: 100%;
    color: var(--text);
    border-spacing: 0 0.5rem;

    th {
      font-weight: 400;
      font-size: 0.9rem;
      padding: 1rem 2rem;
      text-align: left;
    }

    td {
      background: var(--box);
      padding: 1rem 2rem;

      &:first-child {
        color: var(--title);
        border-radius: 0.25rem 0 0 0.25rem;
      }

      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;

        display: flex;
        justify-content: space-between;

        button {
          display: flex;
          align-items: center;
          background: none;
          border: none;
          transition: filter 0.2s;

          &:hover {
            filter: brightness(0.8);
          }
        }
      }

      &.withdraw {
        color: var(--red);
      }

      &.deposit {
        color: var(--secondary);
      }
    }
  }
`;
