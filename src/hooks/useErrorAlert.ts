import { AlertErrorContext } from 'components/AlertErrorContext';
import { useContext } from 'react';

export const useErrorAlert = () => useContext(AlertErrorContext);
