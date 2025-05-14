

import CommonTable  from '@/common/components/CommonTable'
import { Staff } from '../types/Staff'
import { useEffect, useState } from 'react';
import {staffColumns} from '../config/staffColumns'
import {fetchStaffList} from '../mockData/staffList'


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