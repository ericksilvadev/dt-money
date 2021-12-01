import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';

import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import totalIcon from '../../assets/total.svg';
import { Container, Content, SumaryContent } from './styles';
import { useContext } from 'react';
import { TransactionsContext } from '../../context/TransactionsContext';

export function Dashboard() {
  const { transactions } = useContext(TransactionsContext);
  const totalIncomes = transactions.reduce(
    (acc, curr) => (curr.type === 'deposit' ? acc + Number(curr.value) : acc),
    0
  );
  const totalExpenses = transactions.reduce(
    (acc, curr) => (curr.type === 'withdraw' ? acc + Number(curr.value) : acc),
    0
  );
  return (
    <Container>
      <Content>
        <SumaryContent>
          <Summary title="Incomes" icon={incomeIcon} value={totalIncomes} />
          <Summary title="Expenses" icon={outcomeIcon} value={totalExpenses} />
          <Summary
            title="Total"
            icon={totalIcon}
            value={totalIncomes - totalExpenses}
            isTotal
          />
        </SumaryContent>
        <TransactionsTable />
      </Content>
    </Container>
  );
}
