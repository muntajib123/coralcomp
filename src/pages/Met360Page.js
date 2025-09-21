// src/pages/Met360Page.js
import React from 'react';
import { Container, Typography, Box, Breadcrumbs, Link } from '@mui/material';

const Met360Page = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Link underline="hover" color="inherit" href="/">Home</Link>
        <Link underline="hover" color="inherit" href="/products">Our Products</Link>
        <Typography color="text.primary">Met 360</Typography>
      </Breadcrumbs>

      <Typography variant="h3" gutterBottom data-aos="fade-up">
        Met 360 – Cloud & Weather Intelligence
      </Typography>

      <Typography variant="body1" data-aos="fade-up" data-aos-delay="200">
        Met 360 is our cutting-edge cloud service providing real-time and forecasted weather data for aerospace and defense industries.
        It enables smarter decision-making by offering reliable, high-resolution atmospheric insights.
      </Typography>

      <Box mt={4} data-aos="fade-up" data-aos-delay="400">
        <Typography variant="h5">Key Features</Typography>
        <ul>
          <li>27-day geomagnetic activity forecasts</li>
          <li>Real-time satellite observations</li>
          <li>Custom API access for integrations</li>
          <li>Visualization dashboard</li>
        </ul>
      </Box>
    </Container>
  );
};

export default Met360Page;
