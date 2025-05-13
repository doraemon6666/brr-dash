import { SnackbarOrigin } from '@mui/material';

export type SnackbarSeverity = 'success' | 'error' | 'warning' | 'info';

export interface SnackbarProps {
  open: boolean;
  message: string;
  severity?: SnackbarSeverity;
  onClose: () => void;
  autoHideDuration?: number;
  anchorOrigin?: SnackbarOrigin;
}
