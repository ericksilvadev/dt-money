import { createContext, ReactNode, useEffect, useState } from 'react';

interface IProvider {
  children: ReactNode;
}

interface ITransaction {
  title: string;
  value: number;
  category: string;
  date: string;
  type: string;
}

interface ITransactionsContext {
  newTransaction: ITransaction;
  setNewTransaction: (param: ITransaction) => void;
  transactions: ITransaction[];
}

const initialValues = {
  title: '',
  value: 0,
  category: '',
  date: '',
  type: '',
};

const TransactionsContext = createContext({} as ITransactionsContext);

export const TransactionsProvider = ({ children }: IProvider) => {
  const [newTransaction, setNewTransaction] =
    useState<ITransaction>(initialValues);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    const storageTransactions = localStorage.getItem('transactions');

    if (storageTransactions) {
      localStorage.setItem(
        'transactions',
        JSON.stringify([...JSON.parse(storageTransactions), newTransaction])
      );
    } else {
      localStorage.setItem('transactions', JSON.stringify([newTransaction]));
    }
  }, [newTransaction]);
  return (
    <TransactionsContext.Provider
      value={{ newTransaction, setNewTransaction, transactions }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
