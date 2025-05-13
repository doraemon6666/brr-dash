import React, { useEffect, useState } from 'react';
import { Paper,Skeleton } from '@mui/material';
import Grid from '@mui/material/Grid';
import Dashboardcard from './Dashboardcard'
import { fetchTicketStats } from '../mockData/ticketStats'
import { DashboardcardProps } from '../types/DashboardCard';

import '../styles/Dashboard.scss'


export default function Dashboard() {
    const [stats,setStats] = useState<DashboardcardProps[] >([]);
const loading = stats.length === 0;
    useEffect(() => {
        fetchTicketStats().then(setStats)
    },[])

    return (
        // <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        //     {
        //         stats.map((item, index) => (
        //             <Grid size={{ xs: 12, sm: 12, md: 6 }}>
        //                 <Dashboardcard {...item} key={index}/>
        //             </Grid>
                    
        //         ))
        //     }
        // </Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  {
    loading
      ? Array.from({ length: 4 }).map((_, index) => (
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <Skeleton 
                variant="rectangular" 
                height={120} 
                animation="wave" 
                sx={{
                    bgcolor: '#f0f0f0', 
                    borderRadius: 2,
                }} />
          </Grid>
        ))
      : stats.map((item, index) => (
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <Dashboardcard {...item} />
          </Grid>
        ))
  }
</Grid>
    );
}
