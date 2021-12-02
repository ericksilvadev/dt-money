import { createContext, ReactNode, useEffect, useState } from 'react';

interface IProvider {
  children: ReactNode;
}

interface ITransaction {
  title: string;
  value: number | null;
  category: string;
  date: number;
  type: string;
  id: string;
}

interface ITransactionsContext {
  setTransactions: (param: ITransaction[]) => void;
  transactions: ITransaction[];
  isModalOpen: boolean;
  setIsModalOpen: (param: boolean) => void;
}

export const TransactionsContext = createContext({} as ITransactionsContext);

export const TransactionsProvider = ({ children }: IProvider) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    const storageTransactions = localStorage.getItem('transactions');

    if (storageTransactions) {
      console.log(JSON.parse(storageTransactions));
      setTransactions(JSON.parse(storageTransactions));
    }
  }, []);

  useEffect(() => {
    console.log('aqui');
    console.log(transactions);

    if (transactions.length) {
      localStorage.setItem('transactions', JSON.stringify(transactions));
    }
  }, [transactions]);

  return (
    <TransactionsContext.Provider
      value={{
        setTransactions,
        transactions,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
