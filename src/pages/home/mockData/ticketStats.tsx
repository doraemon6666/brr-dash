import {
  BugReport as BugReportIcon,
  AccessAlarm as AccessAlarmIcon,
  Assignment as AssignmentIcon,
  ChecklistRtl as ChecklistRtlIcon,
} from '@mui/icons-material';

import { DashboardcardProps } from '../types/DashboardCard';

export const mockTicketStats: DashboardcardProps[] = [
  {
    title: 'Open Tickets',
    value: 5,
    progress: 60,
    icon: <AssignmentIcon />,
    bgColor: '#B6CCFF',
  },
  {
    title: 'Pending Tasks',
    value: 30,
    progress: 45,
    icon: <AccessAlarmIcon />,
    bgColor: '#FFE8A1',
  },
  {
    title: 'Completed Tasks',
    value: 100,
    progress: 100,
    icon: <ChecklistRtlIcon />,
    bgColor: '#C8E6C9',
  },
  {
    title: 'Requests',
    value: 20,
    progress: 80,
    icon: <BugReportIcon />,
    bgColor: '#C5CAE9',
  },
];

// mock data fetch
export function fetchTicketStats(): Promise<DashboardcardProps[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTicketStats);
    }, 500);
  });
}
