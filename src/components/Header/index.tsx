import { useContext } from 'react';
import logo from '../../assets/logo.svg';
import { TransactionsContext } from '../../context/TransactionsContext';
import { Container, Content } from './styles';

export function Header() {
  const { setIsModalOpen } = useContext(TransactionsContext);
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button onClick={() => setIsModalOpen(true)} type="button">
          New transaction
        </button>
      </Content>
    </Container>
  );
}
