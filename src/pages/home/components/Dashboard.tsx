import React, { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import Dashboardcard from './Dashboardcard'
import { fetchTicketStats } from '../mockData/ticketStats'
import { DashboardcardProps } from '../types/DashboardCard';

import '../styles/Dashboard.scss'


export default function Dashboard() {
    const [stats,setStats] = useState<DashboardcardProps[] >([]);

    useEffect(() => {
        fetchTicketStats().then(setStats)
    },[])

    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
            stats.map((item, index) => (
                <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                    <Dashboardcard {...item} key={index}/>
                </Grid>
                
            ))
        }
    </Grid>
    );
}
