// src/components/AboutSection.js
import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const AboutSection = () => {
  return (
    <Box sx={{ my: 8 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        {/* Main Section Heading */}
        <Typography
          variant="h4"
          gutterBottom
          fontWeight="bold"
          color="text.primary"
          data-aos="fade-down"
        >
          About Us
        </Typography>

        {/* Intro Line */}
        <Typography
          variant="h6"
          gutterBottom
          color="primary"
          fontWeight="medium"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          What We Do? We at CoralComp are in a pursuit to save lives and make air travel joyous!
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: 3 }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We have lost several priceless lives and precious aircrafts due to bad weather.
          Our effort here at CoralComp is to prevent air crashes due to adverse weather conditions,
          such as Microbursts, Lightning, Thunderstorms, and hailstorms. Thereby making air travel
          safer, more comfortable, and more joyful. At our core, we are committed to helping the
          aerospace industry operate safely and efficiently, and our weather analysis and prediction
          services play an important role in achieving this goal.
        </Typography>

        {/* Optional Image */}
        <Box
          component="img"
          src="/images/about_image.jpg"
          alt="About CoralComp"
          data-aos="zoom-in"
          data-aos-delay="300"
          sx={{
            width: '100%',
            maxHeight: 400,
            objectFit: 'cover',
            borderRadius: 4,
            mt: 4,
            boxShadow: 3,
          }}
        />
      </Container>
    </Box>
  );
};

export default AboutSection;
