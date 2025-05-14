import React, { useEffect } from 'react';

import { useLocation, useNavigate, Outlet } from 'react-router-dom';

import { AppProvider } from '@toolpad/core/AppProvider';

import { DashboardLayout } from '@toolpad/core/DashboardLayout';

import { MainLayoutProps, ToolpadRouter } from '../types/layout';

import { menuItems } from '../config/navigation';

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Page view:', location.pathname);
  }, [location.pathname]);

  const router: ToolpadRouter = {
    pathname: location.pathname,
    searchParams: new URLSearchParams(location.search),
    navigate: (to: string | URL) => {
      const url = typeof to === 'string' ? to : to.toString();

      navigate(url);
    },
  };

  return (
    <AppProvider router={router} navigation={menuItems}>
      <DashboardLayout>{children || <Outlet />}</DashboardLayout>
    </AppProvider>
  );
};

export default MainLayout;
