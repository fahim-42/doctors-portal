import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import chair from '../../../Images/chair.png';
import background from '../../../Images/bg.png';
import { Button, Container, Typography } from '@mui/material';

const bannerBG = {
    background: `url(${background})`
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: '500px'
}

const Banner = () => {
    return (
        <Container style={bannerBG} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{...verticalCenter, textAlign: "left"}}>
                    <Box>
                        <Typography variant="h3" sx={{fontWeight: 'bold'}}>
                            Your New Smile <br /> Starts Here
                        </Typography>
                        <Typography variant="body1" sx={{ my: 4, color: 'text.secondary', fontWeight: 'bold', mr: 3}}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi dolore nam ducimus aliquid deserunt voluptatem debitis, minus ratione consequatur earum!
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#05C3E6' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid style={verticalCenter} item xs={12} md={6}>
                    <img style={{ width: '500px' }} src={chair} alt="chair" srcset="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;