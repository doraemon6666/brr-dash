import { Home as HomeIcon, People as PeopleIcon, Assignment as AssignmentIcon } from '@mui/icons-material';
import { NavigationItem } from '../types/layout';

export const menuItems: NavigationItem[] = [
  { segment: '', title: 'Dashboard', icon: <HomeIcon /> },
  { segment: 'staff', title: 'Staff', icon: <PeopleIcon /> },
  { segment: 'itRequest', title: 'IT Request', icon: <AssignmentIcon /> },
  { segment: 'tickets', title: 'Tickets', icon: <AssignmentIcon /> },
  { segment: 'todo', title: 'To-Do', icon: <AssignmentIcon /> },
];

