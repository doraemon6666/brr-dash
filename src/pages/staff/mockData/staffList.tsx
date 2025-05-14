import { Staff } from '../types/Staff';

// mock data
export const staffList: Staff[] = Array.from({ length: 20 }, (_, i) => {
  const id = (i + 1).toString();
  const name = `User ${i + 1}`;
  const email = `user${i + 1}@company.com`;
  const role = Math.floor(Math.random() * 2) + 1; // 1 ~ 3
  const status = Math.random() > 0.3 ? 'active' : 'inactive';
  const lastLogin = `2024-05-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')} ${String(
    Math.floor(Math.random() * 23)
  ).padStart(2, '0')}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}`;
  const storageUsed = `${(Math.random() * 10).toFixed(1)} GB / 10 GB`;
  const devices = ['MacBook Pro', 'iPhone 13', 'Windows PC', 'iPad Pro'];
  const device = devices[Math.floor(Math.random() * devices.length)];

  return {
    id,
    name,
    email,
    role,
    status,
    lastLogin,
    storageUsed,
    device,
  };
});

// mock data fetch
export const fetchStaffList = async (): Promise<Staff[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(staffList);
    }, 500);
  });
};
