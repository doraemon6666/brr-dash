import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { DemoProvider, useDemoRouter } from '@toolpad/core/internal';
import Dashboard from './Dashboard'
import WelcomeTip from './WelcomeTip'



export default function Home() {


  return (
    
    <div>
      <WelcomeTip />
      {/* Dashboard */}
      <Dashboard />
    </div>
  );
}
