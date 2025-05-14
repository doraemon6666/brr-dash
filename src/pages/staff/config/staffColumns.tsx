import {StaffRoleMap} from '@/common/constants'
import {Staff} from '../types/Staff'
import {Column} from '@/common/types/common'
import { Chip } from '@mui/material';

export const staffColumns: Column<Staff>[] = [
    { id: 'name', lable: 'Name' },
    { id: 'email', lable: 'Email' },
    {
      id: 'role',
      lable: 'Role',
      render: (value) => StaffRoleMap[value as number] || 'Unknown',
    },
    {
      id: 'status',
      lable: 'Status',
      render: (value) => (
        <Chip
          label={value === 'active' ? 'Active' : 'Inactive'}
          color={value === 'active' ? 'success' : 'default'}
          size="small"
        />
      ),
    },
    { id: 'lastLogin', lable: 'Last Login' },
    { id: 'storageUsed', lable: 'Storage Used' },
    { id: 'device', lable: 'Device' },
  ];