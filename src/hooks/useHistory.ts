import { useContext } from 'react';
import { HistoryContext } from '../context/historyContext';

export const useHistory = () => useContext(HistoryContext);
