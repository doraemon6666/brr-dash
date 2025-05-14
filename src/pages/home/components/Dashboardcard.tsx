import React from 'react';

import { Box, Card, CardContent, Typography } from '@mui/material';

import { DashboardcardProps } from '../types/DashboardCard';

import '../styles/DashboardCard.scss';

const Dashboardcard = ({ title, value, icon, bgColor }: DashboardcardProps) => {
  return (
    <Card className="dashboard-card" sx={{ backgroundColor: bgColor }}>
      <Box className="dashboard-card-left">
        <CardContent sx={{ flexGrow: 1, padding: 0 }}>
          <Typography className="dashboard-card-title" variant="caption">
            {title}
          </Typography>
        </CardContent>
        <Box className="dashboard-card-progress">
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
              sx={{ fontSize: '30px' }}
            >
              {value}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box className="dashboard-card-icon">{icon}</Box>
    </Card>
  );
};

export default Dashboardcard;
