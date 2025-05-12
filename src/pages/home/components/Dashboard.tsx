import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress, Box } from '@mui/material';
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
        <div className='dashboard'>
           {
             stats.map((item, index) => (
                <Dashboardcard {...item} key={index}/>
              ))
           }
        </div>
    );
}
