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
        {/* Product 1 */}
        <Grid item>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box
              component="img"
              src="/images/product1-logo.jpg"
              alt="Product 1 Logo"
              sx={{ height: 80, mb: 1 }}
            />
            <Button variant="contained" component={Link} to="/products/product1">
              Product 1
            </Button>
          </Box>
        </Grid>

        {/* Product 2 */}
        <Grid item>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box
              component="img"
              src="/images/product2-logo.jpg"
              alt="Product 2 Logo"
              sx={{ height: 80, mb: 1 }}
            />
            <Button variant="contained" component={Link} to="/products/product2">
              Product 2
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductsSection;
