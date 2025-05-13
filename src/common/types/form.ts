import { FieldValues } from 'react-hook-form';

export interface Option {
  label: string;
  value: string | number;
}

export type FormFieldType = 
  | 'text'
  | 'select'
  | 'textarea'
  | 'file'
  | 'checkbox'
  | 'radio'
  | 'date';

export interface FormField {
  name: string;
  label: string;
  type: FormFieldType;
  required?: boolean;
  options?: Option[];
  validation?: Record<string, any>; // e.g. { minLength: 3 }
}

export interface BaseFormProps<T extends FieldValues> {
  fields: FormField[];
  initialValues?: T;
  onSubmit: (data: T) => void;
  setFormSubmit?: (submit: () => void) => void;
}
