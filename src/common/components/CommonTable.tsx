import React, { useState } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TablePagination,
  Box,
  CircularProgress,
  useTheme,
  useMediaQuery,
  Button,
} from '@mui/material';

import { CommonTableProps } from '../types/common';

function CommonTable<T extends { id: string }>({
  columns,
  data,
  rowsPerPageOptions = [5, 10, 20],
  defaultRowsPerPage = 10,
  error = false,
  loading = false,
  onAddClick,
  addButtonLabel = '+ Add',
  renderActions,
}: CommonTableProps<T>) {
  const [page, setPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(defaultRowsPerPage);

  // Adjust columns for small screens,hide configured ones and limit to 3 visible
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const visibleColumns = isSmallScreen
    ? columns.filter((col) => !col.hideOnSmallScreen).slice(0, 3)
    : columns;

  // Handle pagination
  const handleChangePage = (_event: React.MouseEvent | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = data.slice(page * rowPerPage, page * rowPerPage + rowPerPage);

  return (
    <Paper sx={{ mt: 2 }}>
      {onAddClick && (
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button variant="contained" onClick={onAddClick}>
            {addButtonLabel || 'Add New'}
          </Button>
        </Box>
      )}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {visibleColumns.map((col) => (
                <TableCell key={String(col.id)}>
                  <Typography variant="subtitle2">{col.lable}</Typography>
                </TableCell>
              ))}
              {renderActions && <TableCell>Actions</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={visibleColumns.length} align="center">
                  <Box sx={{ py: 3 }}>
                    <CircularProgress />
                  </Box>
                </TableCell>
              </TableRow>
            ) : error ? (
              <TableRow>
                <TableCell colSpan={visibleColumns.length} align="center">
                  <Typography color="error">Failed to load data.</Typography>
                </TableCell>
              </TableRow>
            ) : paginatedData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={visibleColumns.length} align="center">
                  <Typography>No data available.</Typography>
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((row) => (
                <TableRow key={row.id}>
                  {visibleColumns.map((col) => (
                    <TableCell key={String(col.id)}>
                      {col.render ? col.render(row[col.id], row) : String(row[col.id])}
                    </TableCell>
                  ))}
                  {renderActions && <TableCell align="center">{renderActions(row)}</TableCell>}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Pagination*/}
      {!error && !loading && data.length > 0 && (
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={data.length}
          rowsPerPage={rowPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowPerPage}
        />
      )}
    </Paper>
  );
}
export default CommonTable;
