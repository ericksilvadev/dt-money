import { Container } from './styles';

export const TransactionsTable = () => {
  return (
    <Container>
      <table>
        <thead>
          <th>Title</th>
          <th>Value</th>
          <th>Cateory</th>
          <th>Date</th>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">U$ 10.000,00</td>
            <td>Sale</td>
            <td>13/04/2021</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="withdraw">- U$ 1.000,00</td>
            <td>Bill</td>
            <td>05/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
