// src/components/ProductsSection.js
import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';

const ProductsSection = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" align="center" sx={{ fontWeight: 700, mb: 6 }}>
        Our Products
      </Typography>

      <Grid container spacing={6} justifyContent="center">
        {/* FLAREX (left) */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              textAlign: 'center',
              p: 4,
              borderRadius: 2,
              backgroundColor: '#fff',
              boxShadow: 1,
              minHeight: 360,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Use the exact file name that lives in public/images */}
            <Box
              component="img"
              src="/images/flarex-logo.png"
              alt="FLAREX Logo"
              sx={{ height: 120, mb: 3, pointerEvents: 'none' }}
            />

            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              FLAREX
            </Typography>

            <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
              Our pioneering product, FLAREX, conducts research on Space Weather,
              with a specific focus on Solar Flares. It examines the impact of these
              events on Earth’s Upper Atmosphere, Earth’s Geomagnetic Field, and
              Satellite Communication Disruptions.
            </Typography>
          </Box>
        </Grid>

        {/* MET360 (right) */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              textAlign: 'center',
              p: 4,
              borderRadius: 2,
              backgroundColor: '#fff',
              boxShadow: 1,
              minHeight: 360,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              src="/images/met360-logo.png"
              alt="MET360 Logo"
              sx={{ height: 120, mb: 3, pointerEvents: 'none' }}
            />

            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              MET360º
            </Typography>

            <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
              Our mission at CoralComp is to prevent air crashes due to bad/extreme
              weather conditions such as Turbulences, Microbursts, Lightning,
              Thunderstorms, Hail storm, etc. Thereby make air travel safer,
              comfortable and joyous.
            </Typography>

            <Typography
              variant="body1"
              sx={{ fontSize: '1rem', lineHeight: 1.6, mt: 2 }}
            >
              Our innovative product MET360º, does this heavy number crunching using
              AI & ML to identify & predict the possibility of extreme/bad weather
              conditions in the early stages that will avert air disasters.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductsSection;
