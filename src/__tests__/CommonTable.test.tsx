import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import CommonTable from '../common/components/CommonTable';

import { Column } from '../common/types/common';

import useMediaQuery from '@mui/material/useMediaQuery';

// mock useMediaQuery
jest.mock('@mui/material/useMediaQuery', () => ({
  __esModule: true,
  default: jest.fn(() => false),
}));

const mockColumns: Column<any>[] = [
  { id: 'name', lable: 'Name' },
  { id: 'age', lable: 'Age' },
  { id: 'email', lable: 'Email', hideOnSmallScreen: true },
];

const mockData = [
  { id: '1', name: 'Alice', age: 30, email: 'alice@test.com' },
  { id: '2', name: 'Bob', age: 25, email: 'bob@test.com' },
];

describe('CommonTable', () => {
  test('renders headers and data rows', () => {
    render(<CommonTable columns={mockColumns} data={mockData} />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
  });

  test('displays loading spinner', () => {
    render(<CommonTable columns={mockColumns} data={[]} loading />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  test('displays error message', () => {
    render(<CommonTable columns={mockColumns} data={[]} error />);
    expect(screen.getByText(/failed to load data/i)).toBeInTheDocument();
  });

  test('displays empty state', () => {
    render(<CommonTable columns={mockColumns} data={[]} />);
    expect(screen.getByText(/no data available/i)).toBeInTheDocument();
  });

  test('calls onAddClick when button is clicked', () => {
    const handleAdd = jest.fn();

    render(<CommonTable columns={mockColumns} data={mockData} onAddClick={handleAdd} />);
    fireEvent.click(screen.getByText('+ Add'));
    expect(handleAdd).toHaveBeenCalled();
  });

  test('renders custom renderActions per row', () => {
    render(
      <CommonTable
        columns={mockColumns}
        data={mockData}
        renderActions={() => <button>Action</button>}
      />
    );
    expect(screen.getAllByText('Action')).toHaveLength(mockData.length);
  });

  test('pagination shows next page data', async () => {
    const pageData = Array.from({ length: 12 }, (_, i) => ({
      id: `${i}`,
      name: `User ${i}`,
      age: 20 + i,
      email: `user${i}@test.com`,
    }));

    render(<CommonTable columns={mockColumns} data={pageData} defaultRowsPerPage={5} />);

    expect(await screen.findByText((text) => text.includes('User 0'))).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText('Go to next page'));
    expect(screen.getByText('User 5')).toBeInTheDocument();
  });

  test('changing rows per page resets to first page', async () => {
    const pageData = Array.from({ length: 12 }, (_, i) => ({
      id: `${i}`,
      name: `User ${i}`,
      age: 20 + i,
      email: `user${i}@test.com`,
    }));

    render(
      <CommonTable
        columns={mockColumns}
        data={pageData}
        defaultRowsPerPage={5}
        rowsPerPageOptions={[5, 10]}
      />
    );

    fireEvent.click(screen.getByLabelText('Go to next page'));
    expect(screen.getByText('User 5')).toBeInTheDocument();

    const select = screen.getByLabelText(/rows per page/i);

    await userEvent.click(select);
    await userEvent.click(screen.getByRole('option', { name: '10' }));

    expect(await screen.findByText(/User 0/)).toBeInTheDocument();

    expect(screen.getByText('User 9')).toBeInTheDocument();
  });

  test('hides columns on small screen', () => {
    // mock small screen
    (useMediaQuery as jest.Mock).mockReturnValue(true);
    render(<CommonTable columns={mockColumns} data={mockData} />);

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    expect(screen.queryByText('Email')).toBeNull();
  });
});
