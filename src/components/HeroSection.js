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
      {/* DEBUG: Video ON TOP with controls & visible border */}
      <video
        autoPlay
        loop
        muted
        playsInline
        controls
        preload="auto"
        crossOrigin="anonymous"
        aria-label="Background video showing CoralComp aerospace capabilities"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.85)',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 2,            // ON TOP for testing
          border: '5px solid rgba(255,0,0,0.6)', // visible red border
        }}
      >
        <source
          src="https://res.cloudinary.com/dfy3n7j6o/video/upload/v1758455112/coral_video_oxsn6t.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content (on top) */}
      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          color: '#fff',
          px: 2,
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          Revolutionizing Aerospace Decision-Making
        </Typography>
        <Typography
          variant="h6"
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
