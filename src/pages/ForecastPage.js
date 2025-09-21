// src/pages/ForecastPage.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const ForecastPage = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h3" gutterBottom>Forecast Viewer</Typography>
      <Typography>Forecast data will be shown here.</Typography>
    </Container>
  );
};

export default ForecastPage;
