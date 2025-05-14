export const BASE_URL = 'http://localhost:3001';

export enum StaffRoleEnum {
  Admin = 1,
  Staff = 2,
}

export const StaffRoleMap: Record<number, string> = {
  [StaffRoleEnum.Admin]: 'Admin',
  [StaffRoleEnum.Staff]: 'Staff',
};

export enum ItRequestPriorityEnum {
  Low = 1,
  Medium = 2,
  High = 3,
}

export const ItRequestPriorityMap: Record<number, string> = {
  [ItRequestPriorityEnum.Low]: 'Low',
  [ItRequestPriorityEnum.Medium]: 'Medium',
  [ItRequestPriorityEnum.High]: 'High',
};

export enum ItRequestStatusEnum {
  Pending = 1,
  InProgress = 2,
  Resolved = 3,
}

export const ItRequestStatusMap: Record<number, string> = {
  [ItRequestStatusEnum.Pending]: 'Pending',
  [ItRequestStatusEnum.InProgress]: 'In Progress',
  [ItRequestStatusEnum.Resolved]: 'Resolved',
};

export enum ItRequestIssueTypeEnum {
  Hardware = 1,
  Software = 2,
  Network = 3,
  Other = 4,
}

export const ItRequestIssueTypeMap: Record<number, string> = {
  [ItRequestIssueTypeEnum.Hardware]: 'Hardware',
  [ItRequestIssueTypeEnum.Software]: 'Software',
  [ItRequestIssueTypeEnum.Network]: 'Network',
  [ItRequestIssueTypeEnum.Other]: 'Other',
};

export const SKELETON_BG_COLOR = '#f0f0f0';

export const WELCOME_MESSAGE = 'Welcome Back ';

export const STATUS_MAP = {
  active: {
    label: 'Active',
    color: 'success',
  },
  inactive: {
    label: 'Inactive',
    color: 'default',
  },
} as const;
