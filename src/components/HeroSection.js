import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        height: { xs: '60vh', md: '75vh' },
        overflow: 'hidden',
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-label="Background video showing CoralComp aerospace capabilities"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.85)', // ⬅️ brightened
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <source src="/coral_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4))', // ⬅️ lighter overlay
          zIndex: 0,
        }}
      />

      {/* Hero Content */}
      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          color: '#fff',
          px: 2,
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          data-aos="fade-up"
          sx={{
            textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          Revolutionizing Aerospace Decision-Making
        </Typography>
        <Typography
          variant="h6"
          data-aos="fade-up"
          data-aos-delay="200"
          sx={{
            mt: 2,
            textShadow: '1px 1px 6px rgba(0,0,0,0.5)',
            fontSize: { xs: '1rem', md: '1.25rem' },
          }}
        >
          with Real-Time Weather Analysis and Prediction
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;
