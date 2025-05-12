
import { Staff } from '../types/Staff'
export const staffList: Staff[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@company.com',
    role: 1,
    status: 'active',
    lastLogin: '2024-05-10 09:15',
    storageUsed: '2.3 GB / 10 GB',
    device: 'MacBook Pro',
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob@company.com',
    role: 2,
    status: 'inactive',
    lastLogin: '2024-05-08 14:50',
    storageUsed: '1.1 GB / 10 GB',
    device: 'iPhone 13',
  },
];

// mock data fetch
export const fetchStaffList = async (): Promise<Staff[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(staffList);
    }, 5500);
  });
};

