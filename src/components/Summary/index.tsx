import { Container } from './styles';

interface ISumary {
  title: string;
  icon: string;
  value: string;
  isTotal?: boolean;
}

export const Summary: React.FC<ISumary> = ({ title, icon, value, isTotal }) => {
  return (
    <Container className={isTotal ? 'total' : ''}>
      <header>
        <p>{title}</p>
        <img src={icon} alt={title} />
      </header>
      <strong>{value}</strong>
    </Container>
  );
};
