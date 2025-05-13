

import CommonTable  from '@/common/components/CommonTable'
import { Staff } from '../types/Staff'
import { StaffRoleEnum,StaffRoleMap } from '@/common/constants'
import {Column} from '@/common/types/common'
import { Chip, CircularProgress, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import {fetchStaffList} from '../mockData/staffList'

const staffColumns: Column<Staff>[] = [
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
function StaffTable() {
    const [staffList,setStaffList] = useState<Staff[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadData = async () => {
          try {
            const res = await fetchStaffList();
            setStaffList(res);
          } catch (err) {
            console.error('Failed to fetch staff list:', err);
            setError(true);
          } finally {
            setLoading(false);
          }
        };
        loadData();
      }, []);

    return (
        <CommonTable 
            columns={staffColumns} 
            data={staffList} 
            error={error} 
            loading={loading} />
    );
  }
  export default StaffTable