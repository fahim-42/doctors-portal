import React from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const SingleService = ({ service }) => {
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{width: 'auto', height: '80px', margin: '0 auto'}}
                    image={service.img}
                    alt={service.name}
                />
                <CardContent>
                    <Typography variant="h5" component="div" sx={{my: 2,fontWeight: 500, color: 'text.secondary'}}>
                        {service.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {service.description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default SingleService;