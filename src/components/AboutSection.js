// src/components/AboutSection.js
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
} from '@mui/material';

const AboutSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: 'background.paper',
        textAlign: 'center',
      }}
      aria-labelledby="about-heading"
    >
      <Container maxWidth="md">
        {/* Text Content */}
        <Typography
          id="about-heading"
          variant="h4"
          component="h2"
          gutterBottom
          fontWeight="700"
          color="text.primary"
          data-aos="fade-down"
        >
          About CoralComp
        </Typography>

        <Typography
          variant="subtitle1"
          gutterBottom
          color="primary"
          fontWeight={600}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Integrating aviation and space weather into a single, intelligent platform.
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: 2, lineHeight: 1.7, textAlign: 'justify' }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          At CoralComp, we go beyond traditional weather forecasting by integrating both aviation
          weather and space weather into a single, intelligent platform. In addition to tracking
          atmospheric phenomena such as turbulence, microbursts, hail, and thunderstorms, we
          meticulously study space weather events—including solar flares, geomagnetic disturbances,
          and their potential to disrupt satellite communications and navigation systems.
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: 2, lineHeight: 1.7, textAlign: 'justify' }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          By combining real-time data streams with advanced Artificial Intelligence and Machine
          Learning algorithms, our system delivers highly accurate, timely predictions. This enables
          airlines, airports, and aerospace stakeholders to take proactive measures—whether it’s
          adjusting flight paths, managing operations, or safeguarding communication infrastructure.
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: 2, lineHeight: 1.7, textAlign: 'justify' }}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Our goal is simple yet critical: to enhance safety, resilience, and comfort in both air
          and space travel, while reducing risks, costs, and disruptions caused by unpredictable
          weather events.
        </Typography>

        {/* Image */}
        <Paper
          elevation={3}
          sx={{
            borderRadius: 3,
            overflow: 'hidden',
            mt: 5,
          }}
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <Box
            component="img"
            src="/images/about_new.jpg"
            alt="Control room with multiple monitors showing weather and satellite data"
            sx={{
              display: 'block',
              width: '100%',
              maxHeight: 420,
              objectFit: 'cover',
            }}
          />
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutSection;
