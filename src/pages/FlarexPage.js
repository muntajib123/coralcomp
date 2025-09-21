// src/pages/FlarexPage.js
import React from 'react';
import {
  Container,
  Typography,
  Box,
  Breadcrumbs,
  Link,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';

const FlarexPage = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Link underline="hover" color="inherit" href="/">Home</Link>
        <Link underline="hover" color="inherit" href="/products">Our Products</Link>
        <Typography color="text.primary">Flarex</Typography>
      </Breadcrumbs>

      <Typography variant="h3" gutterBottom data-aos="fade-up">
        Flarex – Space Weather Security Monitoring
      </Typography>

      <Typography variant="body1" data-aos="fade-up" data-aos-delay="200">
        Flarex offers real-time space weather monitoring for defense systems and communication networks. Stay secure with alerts on solar activity, radio blackouts, and geomagnetic storms.
      </Typography>

      <Box mt={4} data-aos="fade-up" data-aos-delay="400">
        <Typography variant="h5">Highlights</Typography>
        <ul>
          <li>Solar flare alerts & CME tracking</li>
          <li>Kp index-based risk assessment</li>
          <li>Uptime assurance for critical systems</li>
          <li>Secure data visualization</li>
        </ul>
      </Box>

      {/* 🔗 Forecast Tool Links */}
      <Box mt={6} data-aos="fade-up" data-aos-delay="600">
        <Typography variant="h5" gutterBottom>
          Explore Forecast Tools
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: '#1e1e1e', color: '#fff' }}>
              <CardContent>
                <Typography variant="h6">🌤 3-Day Forecast Viewer</Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  View short-term solar weather predictions in an interactive dashboard.
                </Typography>
                <Button
                  variant="contained"
                  href="https://your-3day-forecast-url.com"
                  target="_blank"
                  rel="noopener"
                  sx={{ backgroundColor: '#2196f3' }}
                >
                  Visit 3-Day App
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: '#1e1e1e', color: '#fff' }}>
              <CardContent>
                <Typography variant="h6">🌍 27-Day Forecast Viewer</Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Analyze long-term space weather forecasts using AI-powered LSTM models.
                </Typography>
                <Button
                  variant="contained"
                  href="https://your-27day-forecast-url.com"
                  target="_blank"
                  rel="noopener"
                  sx={{ backgroundColor: '#4caf50' }}
                >
                  Visit 27-Day App
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default FlarexPage;
