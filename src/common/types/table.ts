import React from 'react';

export interface Column<T = any> {
  id: keyof T;
  label: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
  hideOnSmallScreen?: boolean;
}

export interface CommonTableProps<T> {
  columns: Column<T>[];
  data: T[];
  rowsPerPageOptions?: number[];
  defaultRowsPerPage?: number;
  error?: boolean;
  loading?: boolean;
  onAddClick?: () => void;
  addButtonLabel?: string;
  renderActions?: (row: T) => React.ReactNode;
}
