import { User } from '../types/common';

export const mockCurrentUser: User = {
  id: 'user-001',
  email: 'john.doe@example.com',
  username: 'johndoe',
  firstname: 'John',
  lastname: 'Doe',
  role: 'admin',
};
export async function fetchCurrentUser() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  // user data
  return mockCurrentUser;
}
