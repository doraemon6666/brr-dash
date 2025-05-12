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
}

// Form 
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'select' | 'textarea' | 'file' | 'checkbox' | 'radio' | 'date';
  required?: boolean;
  options?: string[];
  validation?: Record<string, any>; // e.g. { minLength: 3 }
}

export interface BaseFormProps<T> {
  fields: FormField[];
  initialValues: Partial<T>;
  onSubmit: (data: T) => void;
}
