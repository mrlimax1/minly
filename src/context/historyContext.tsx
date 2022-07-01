import { createContext } from 'react';

export interface HistoryData {
  initialLink: string
  link: string
};

interface Props {
  history: HistoryData[];
  editHistory: (history: HistoryData[]) => void;
}

export const HistoryContext = createContext<Props>({
  history: [],
  editHistory: () => {},
});
