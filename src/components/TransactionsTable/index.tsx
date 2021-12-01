import { useContext } from 'react';
import { TransactionsContext } from '../../context/TransactionsContext';
import { Container } from './styles';

export const TransactionsTable = () => {
  const { transactions } = useContext(TransactionsContext);
  // if (!transactions.length) return <div>loading...</div>;
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Cateory</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            console.log(transaction.date);
            return (
              <tr key={String(transaction.title + transaction.value)}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {transaction.type === 'withdraw' && <span>-</span>}
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(Number(transaction.value))}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat('en-US').format(
                    new Date(transaction.date)
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* {!transactions.length && <p>No transactions registered yet.</p>} */}
    </Container>
  );
};
