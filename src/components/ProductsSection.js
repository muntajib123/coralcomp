// src/components/ProductsSection.js
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const ProductsSection = () => {
  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        Our Products
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Product 1 */}
        <Grid item>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* clickable logo that navigates to the product page */}
            <Link to="/products/product1" aria-label="Go to Product 1 page" style={{ display: "inline-block" }}>
              <Box
                component="img"
                src="/images/product1-logo.jpg"
                alt="Product 1 Logo"
                sx={{ height: 100, mb: 1, cursor: "pointer", borderRadius: 1 }}
              />
            </Link>
          </Box>
        </Grid>

        {/* Product 2 */}
        <Grid item>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Link to="/products/product2" aria-label="Go to Product 2 page" style={{ display: "inline-block" }}>
              <Box
                component="img"
                src="/images/product2-logo.jpg"
                alt="Product 2 Logo"
                sx={{ height: 100, mb: 1, cursor: "pointer", borderRadius: 1 }}
              />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductsSection;
