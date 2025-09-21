import React, { useEffect, useState } from 'react';
import { Box, Typography, Container } from '@mui/material';

const videos = ["/video1.mp4", "/video2.mp4"]; // Save your 2 videos here

const HeroSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 10000); // switch every 10s
    return () => clearInterval(interval);
  }, []);

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
        key={currentVideo} // ensures reload when video changes
        autoPlay
        muted
        playsInline
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
          zIndex: 0,
        }}
      >
        <source src={videos[currentVideo]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.35))',
          zIndex: 1,
        }}
      />

      {/* Hero Content */}
      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 2,
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
          We provide Weather Intelligence to Aerospace Industry.
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;
