import { FieldValues } from 'react-hook-form';
import {SnackbarOrigin} from '@mui/material';
// current user
export interface User {
  id: string;
  email: string;
  username?: string;
  firstname?: string;
  lastname?: string;
  role?: string;
}

export interface UserContextValue {
  user: User | null;
  loading: boolean;
  error: Error | null;
}

// table 
export interface Column<T = any> {
  id: keyof T;
  lable: string;
  render?:(value:any,row:T) => React.ReactNode;
  hideOnSmallScreen?: boolean;
}

export interface CommonTableProps<T>{
  columns:Column<T>[],
  data:T[],
  rowsPerPageOptions?: number[];
  defaultRowsPerPage?: number;
  error?: boolean;
  loading?: boolean;
  onAddClick?: () => void; // add callback
  addButtonLabel?: string; // button label
  renderActions?: (row: T) => React.ReactNode; // action button
}

// Form 
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'select' | 'textarea' | 'file' | 'checkbox' | 'radio' | 'date';
  required?: boolean;
  options?: Array<{ label: string; value: string | number }>;
  validation?: Record<string, any>; // e.g. { minLength: 3 }
}

export interface BaseFormProps<T extends FieldValues> {
  fields: FormField[];
  initialValues?: T;
  onSubmit: (data: T) => void;
  setFormSubmit?: (submit: () => void) => void;
}

export type SnackbarSeverity = 'success' | 'error' | 'warning' | 'info';

export interface SnackbarProps {
  open: boolean;
  message: string;
  severity?: SnackbarSeverity;
  onClose: () => void;
  autoHideDuration?: number;
  anchorOrigin?: SnackbarOrigin;
}

export type UploadApi = (file: File) => Promise<{ success: boolean; url?: string; error?: string }>;
