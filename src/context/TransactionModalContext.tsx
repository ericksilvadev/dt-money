import { createContext, ReactNode } from 'react';

const TransactionModalContext = createContext({});

interface IProvider {
  children: ReactNode;
}

export const TransactionModalProvider = ({ children }: IProvider) => {
  return (
    <TransactionModalContext.Provider value={{}}>
      {children}
    </TransactionModalContext.Provider>
  );
};
