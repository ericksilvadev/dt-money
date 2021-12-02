import Modal from 'react-modal';
import { useFormik } from 'formik';
import * as yup from 'yup';

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
  const [transactionType, setTransactionType] = useState('deposit');

  const validationSchema = yup.object({
    title: yup.string().required().max(25).min(1),
    value: yup.number().required().integer(),
    category: yup.string().required().max(25).min(1),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      setTransactions([
        ...transactions,
        {
          ...values,
          date: Date.now(),
          type: transactionType,
        },
      ]);
      setIsModalOpen(false);
    },
  });

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
      <FormContainer onSubmit={formik.handleSubmit}>
        <h2>Create new transaction</h2>
        <input
          name="title"
          value={formik.values.title}
          type="text"
          placeholder="Title"
          onChange={formik.handleChange}
          autoComplete="no"
          className={
            formik.touched.title && Boolean(formik.errors.title) ? 'error' : ''
          }
        />
        <input
          name="value"
          value={formik.values.value || ''}
          type="numer"
          placeholder="Value"
          onChange={formik.handleChange}
          autoComplete="no"
          className={
            formik.touched.value && Boolean(formik.errors.value) ? 'error' : ''
          }
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
          value={formik.values.category}
          type="text"
          placeholder="Category"
          onChange={formik.handleChange}
          autoComplete="no"
          className={
            formik.touched.category && Boolean(formik.errors.category)
              ? 'error'
              : ''
          }
        />
        <button type="submit">Register</button>
      </FormContainer>
    </Modal>
  );
}
