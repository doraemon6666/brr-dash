import { StaffRoleMap } from '@/common/constants';

import { Staff } from '../types/Staff';

import { Column } from '@/common/types/common';

import { Chip } from '@mui/material';

import { STATUS_MAP } from '@/common/constants';

import React from 'react';

const renderStatusChip = (value: string) => {
  const status = STATUS_MAP[value as keyof typeof STATUS_MAP] ?? { label: value, color: 'default' };

  return <Chip label={status.label} color={status.color} size="small" />;
};

export const staffColumns: Column<Staff>[] = [
  { id: 'name', lable: 'Name' },
  { id: 'email', lable: 'Email' },
  { id: 'role', lable: 'Role', render: (value) => StaffRoleMap[value as number] || 'Unknown' },
  {
    id: 'status',
    lable: 'Status',
    render: (value) => renderStatusChip(value),
  },
  { id: 'lastLogin', lable: 'Last Login' },
  { id: 'storageUsed', lable: 'Storage Used' },
  { id: 'device', lable: 'Device' },
];
