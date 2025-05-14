import React, { useEffect, useState } from 'react';

import { Skeleton } from '@mui/material';

import Grid from '@mui/material/Grid';

import Dashboardcard from './Dashboardcard';

import { fetchTicketStats } from '../mockData/ticketStats';

import { DashboardcardProps } from '../types/DashboardCard';

import { SKELETON_BG_COLOR } from '@/common/constants';

import { useSnackbarContext } from '@/common/contexts/snackbar';

import '../styles/Dashboard.scss';

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardcardProps[]>([]);
  const loading = stats.length === 0;
  const { showSnackbar } = useSnackbarContext();

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchTicketStats();

        setStats(data);
      } catch (error) {
        const msg = error instanceof Error ? error.message : 'Unknown error';

        showSnackbar(msg, 'error');
      }
    };

    loadStats();
  }, []);

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {loading
        ? Array.from({ length: 4 }).map((_, index) => (
            <Grid size={{ xs: 12, sm: 12, md: 6 }} key={index}>
              {/* TODO Extract Skeleton block into a reusable component */}
              <Skeleton
                variant="rectangular"
                height={120}
                animation="wave"
                sx={{ bgcolor: SKELETON_BG_COLOR, borderRadius: 2 }}
              />
            </Grid>
          ))
        : stats.map((item, index) => (
            <Grid size={{ xs: 12, sm: 12, md: 6 }} key={index}>
              <Dashboardcard {...item} />
            </Grid>
          ))}
    </Grid>
  );
}
