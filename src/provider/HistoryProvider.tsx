
import { ReactNode, useState } from 'react';
import { HistoryData, HistoryContext } from '../context/historyContext';
import { storage } from '../models/Storage';

interface Props {
  children: ReactNode;
}

export const HistoryProvider = ({ children, ...props }: Props) => {
  const [history, setHistory] = useState<HistoryData[]>(
    storage.getItem('history') || []
  );
  function editHistory(history: HistoryData[]) {
    storage.setItem('history', history);
    setHistory(history);
  }

  return (
    <HistoryContext.Provider
      value={{
        history,
        editHistory,
      }}
      {...props}
    >
      {children}
    </HistoryContext.Provider>
  );
};