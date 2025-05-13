// src/contexts/snackbar/SnackbarContext.tsx
import { createContext, useContext } from 'react';
import {SnackbarSeverity} from '../../types/common'

export interface SnackbarContextType {
  showSnackbar: (message: string, severity?: SnackbarSeverity) => void;
}

export const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export function useSnackbarContext(): SnackbarContextType {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbarContext must be used within a SnackbarProvider');
  }
  return context;
}
