import Modal from 'react-modal';

import { FormContainer, TransactionTypeContainer } from './styles';
import closeIcon from '../../assets/close.svg';
import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import { useState } from 'react';

export function NewTransactionModal() {
  const [transactionType, setTransactionType] = useState('deposit');
  return (
    <Modal
      isOpen={false}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <button type="button">
        <img src={closeIcon} alt="Close modal" />
      </button>
      <FormContainer>
        <h2>Create new transaction</h2>
        <input type="text" placeholder="title" />
        <input type="numer" placeholder="value" />
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
        <input type="text" placeholder="category" />
        <button type="button">Register</button>
      </FormContainer>
    </Modal>
  );
}
