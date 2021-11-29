import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';

import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import totalIcon from '../../assets/total.svg';
import { Container, Content, SumaryContent } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Content>
        <SumaryContent>
          <Summary title="Incomes" icon={incomeIcon} value="U$ 17.400,00" />
          <Summary title="Expenses" icon={outcomeIcon} value="U$ 1.259,00" />
          <Summary
            title="Total"
            icon={totalIcon}
            value="U$ 16.141,00"
            isTotal
          />
        </SumaryContent>
        <TransactionsTable />
      </Content>
    </Container>
  );
}
