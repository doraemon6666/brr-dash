import React from 'react';

import Dashboardcard from './Dashboardcard';

import BugReportIcon from '@mui/icons-material/BugReport';

export default {
  title: 'Components/TicketStatCard',
  component: Dashboardcard,
};

export const Default = () => (
  <Dashboardcard title="Open Tickets" value={12} progress={75} icon={<BugReportIcon />} />
);
