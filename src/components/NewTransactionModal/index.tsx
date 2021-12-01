import Modal from 'react-modal';

import { FormContainer, TransactionTypeContainer } from './styles';
import closeIcon from '../../assets/close.svg';
import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import { FormEvent, useContext, useState } from 'react';
import { TransactionsContext } from '../../context/TransactionsContext';

interface ITransaction {
  title: string;
  value: number | null;
  category: string;
  date: number;
  type: string;
}

const initialValues = {
  title: '',
  value: null,
  category: '',
  date: Date.now(),
  type: '',
};

export function NewTransactionModal() {
  const { isModalOpen, setIsModalOpen, setTransactions, transactions } =
    useContext(TransactionsContext);
  const [newTransaction, setNewTransaction] =
    useState<ITransaction>(initialValues);
  const [transactionType, setTransactionType] = useState('deposit');

  const handleChange = ({ target }: any) => {
    const { name, value } = target;

    setNewTransaction({
      ...newTransaction,
      [name]: value,
      type: transactionType,
      date: Date.now(),
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setTransactions([...transactions, newTransaction]);
    setNewTransaction(initialValues);
    setIsModalOpen(false);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <button type="button" onClick={() => setIsModalOpen(false)}>
        <img src={closeIcon} alt="Close modal" />
      </button>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Create new transaction</h2>
        <input
          name="title"
          value={newTransaction.title}
          type="text"
          placeholder="Title"
          onChange={handleChange}
          autoComplete="no"
        />
        <input
          name="value"
          value={newTransaction.value || ''}
          type="numer"
          placeholder="Value"
          onChange={handleChange}
          autoComplete="no"
        />
        <TransactionTypeContainer>
          <button
            type="button"
            onClick={() => setTransactionType('deposit')}
            className={transactionType === 'deposit' ? 'deposit' : ''}
          >
            <img src={incomeIcon} alt="deposit" />
            <span>Deposit</span>
          </button>
          <button
            type="button"
            onClick={() => setTransactionType('withdraw')}
            className={transactionType === 'withdraw' ? 'withdraw' : ''}
          >
            <img src={outcomeIcon} alt="withdraw" />
            <span>Withdraw</span>
          </button>
        </TransactionTypeContainer>
        <input
          name="category"
          value={newTransaction.category}
          type="text"
          placeholder="Category"
          onChange={handleChange}
          autoComplete="no"
        />
        <button type="submit">Register</button>
      </FormContainer>
    </Modal>
  );
}
