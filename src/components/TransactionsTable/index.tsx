import { useContext } from 'react';

import { TransactionsContext } from '../../context/TransactionsContext';
import { Container } from './styles';
import closeIcon from '../../assets/close.svg';

export const TransactionsTable = () => {
  const { transactions, setTransactions } = useContext(TransactionsContext);

  const handleTransactionDelete = (id: string) => {
    const filterdTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );

    setTransactions(filterdTransactions);
  };

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
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

                  <button
                    type="button"
                    onClick={() => handleTransactionDelete(transaction.id)}
                  >
                    <img src={closeIcon} alt="Close modal" />
                  </button>
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
