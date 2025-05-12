import React from "react";
import  Grid from '@mui/joy';
import { Box, Card, CardContent, CircularProgress, Avatar,Typography } from '@mui/material';
import { DashboardcardProps } from '../types/DashboardCard'
import '../styles/DashboardCard.scss'
import { blue } from "@mui/material/colors";

const Dashboardcard = ({title,subTitle,value,progress,icon,bgColor} : DashboardcardProps) => {
    let progressString = `${Math.round(value)}%`
    return(
        <Card className='dashboard-card' sx={{ backgroundColor: bgColor}}>
            <Box className='dashboard-card-left'>
                <CardContent sx={{ flexGrow: 1,padding:0 }}>
                    <Typography className='dashboard-card-title' variant="caption">
                        {title}
                    </Typography>
                </CardContent>
                <Box className='dashboard-card-progress'>
                    {/* <CircularProgress
                        variant="determinate"
                        value={value}
                        size={80}
                        thickness={4} /> */}
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
                            <Typography variant="caption" component="div" color="text.secondary">
                                {value}
                            </Typography>
                        </Box>
                </Box>
            </Box>
          
            <Box className='dashboard-card-icon'>
                {icon}
            </Box>
        </Card>
        
    )
  }
  export default Dashboardcard;