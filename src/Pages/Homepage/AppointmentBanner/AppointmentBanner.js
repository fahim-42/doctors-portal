import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

import doctor from '../../../Images/doctor.png';
import background from '../../../Images/appointment-bg.png';

const appointmentBG = {
    background: `url(${background})`,
    marginTop: 175,
    // backgroundPosition: 'center',
    backgroundColor: 'rgba(45,58,74,0.8)',
    backgroundBlendMode: 'darken, luminosity'
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBG} sx={{ flexGrow: 1, mx: 10 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '400px', marginTop: '-110px' }} src={doctor} alt="doctor" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <Box>
                        <Typography variant='h6' sx={{mb: 2}} style={{ color: '#5CE7ED' }}>Appointment</Typography>
                        <Typography variant='h4' sx={{mb: 2}} style={{ color: 'white' }}>Make an appointment</Typography>
                        <Typography variant='h4' sx={{mb: 2}} style={{ color: 'white' }}>Today</Typography>
                        <Typography variant='body1' style={{ color: 'white' }}>It is a long established fact that a  reader will be distracted by the readable content of a page when looking at its</Typography>
                        <Button variant="contained" style={{backgroundColor: '#05C3E6', marginTop: '20px'}}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;