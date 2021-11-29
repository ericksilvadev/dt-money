import { Summary } from '../Summary';

import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import totalIcon from '../../assets/total.svg';
import { Container, Content } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Content>
        <Summary title="Entradas" icon={incomeIcon} value="R$ 17.400,00" />
        <Summary title="Saídas" icon={outcomeIcon} value="R$ 1.259,00" />
        <Summary title="Total" icon={totalIcon} value="R$ 16.141,00" isTotal />
      </Content>
    </Container>
  );
}
