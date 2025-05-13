
import { StaffRoleEnum } from '@/common/constants'

export interface Staff {
  id: string;
  name: string;
  email: string;
  role: StaffRoleEnum;
  status: 'active' | 'inactive';
  lastLogin?: string;
  storageUsed?: string;
  device?: string;
}
