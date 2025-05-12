import React, { useEffect } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
// TODO right icons
import {
  Home as HomeIcon,
  People as PeopleIcon,
  Assignment as AssignmentIcon,
  ListAlt as ListAltIcon,
  SupportAgent as SupportAgentIcon,
} from '@mui/icons-material';

import { NavigationItem,MainLayoutProps,ToolpadRouter } from '../types/layout'

// TODO data
const menuItems : NavigationItem[] = [
  { segment: '', title: 'Dashboard', icon: <HomeIcon /> },
  { segment: 'staff', title: 'Staff', icon: <PeopleIcon /> },
  { segment: 'tickets', title: 'Tickets', icon: <AssignmentIcon /> },
  { segment: 'todo', title: 'To-Do', icon: <AssignmentIcon /> },
  { segment: 'request', title: 'IT Request', icon: <AssignmentIcon /> },
];

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Page view:', location.pathname);
  }, [location.pathname]);

  // TODO 
  const router: ToolpadRouter = {
    pathname: location.pathname,
    searchParams: new URLSearchParams(location.search),
    navigate: (to: string | URL) => {
      const url = typeof to === 'string' ? to : to.toString();
      navigate(url);
    },
  };

  interface DemoProps {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window?: () => Window;
  }
 
  return (
    <AppProvider router={router} navigation={menuItems}>
      <DashboardLayout>
        {children || <Outlet />}
      </DashboardLayout>
    </AppProvider>
  );
};

export default MainLayout;
