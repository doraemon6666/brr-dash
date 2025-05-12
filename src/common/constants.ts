export const ROUTES = {
    HOME: '/',
    STAFF: '/staff',
};
export enum StaffRoleEnum {
    Admin = 1,
    Staff = 2
  }
  
  export const StaffRoleMap: Record<number, string> = {
    [StaffRoleEnum.Admin]: 'Admin',
    [StaffRoleEnum.Staff]: 'Staff'
  };
  

