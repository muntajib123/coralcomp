// src/components/ProductsSection.js
import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductsSection = () => {
  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        Our Products
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box
              component="img"
              src="/images/met360-logo.png"
              alt="Met 360 Logo"
              sx={{ height: 60, mb: 1 }}
            />
            <Button variant="contained" component={Link} to="/products/met360">
              Met 360
            </Button>
          </Box>
        </Grid>

        <Grid item>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box
              component="img"
              src="/images/flarex-logo.png"
              alt="Flarex Logo"
              sx={{ height: 60, mb: 1 }}
            />
            <Button variant="contained" component={Link} to="/products/flarex">
              Flarex
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductsSection;
