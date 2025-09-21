// src/pages/OurProductsPage.js
import React from "react";
import { Container, Grid, Box, Typography, Paper, Divider } from "@mui/material";

const OurProductsPage = () => {
  return (
    <Container sx={{ py: { xs: 6, md: 8 } }}>
      {/* Page Title */}
      <Typography
        variant="h3"
        align="center"
        sx={{ fontWeight: 700, mb: { xs: 4, md: 6 } }}
      >
        Our Products
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* MET 360 card */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={4}
            sx={{
              textAlign: "center",
              p: { xs: 3, md: 6 },
              borderRadius: 2,
              minHeight: 400,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "background.paper", // theme-aware
              color: "text.primary",
            }}
          >
            <Box
              component="img"
              src="/images/product2-logo.jpg"
              alt="MET 360 Logo"
              sx={{ height: 120, mb: 3, display: "block" }}
            />

            <Typography variant="h5" fontWeight={700} gutterBottom>
              MET 360
            </Typography>

            <Divider sx={{ width: "60%", my: 2, borderColor: "divider" }} />

            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                lineHeight: 1.6,
                color: "text.secondary",
                textAlign: "center",
                mb: 2,
              }}
            >
              Our mission at CoralComp is to prevent air crashes due to
              bad/extreme weather conditions such as turbulences, microbursts,
              lightning, thunderstorms, hailstorms, etc. We make air travel safer,
              more comfortable, and more reliable.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                lineHeight: 1.6,
                color: "text.secondary",
                textAlign: "center",
                maxWidth: 720,
              }}
            >
              Our innovative product MET 360 performs heavy number crunching using
              AI & ML to identify and predict extreme/bad weather conditions in
              early stages—helping avert air disasters and improving operational
              resilience.
            </Typography>
          </Paper>
        </Grid>

        {/* FLAREX card */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={4}
            sx={{
              textAlign: "center",
              p: { xs: 3, md: 6 },
              borderRadius: 2,
              minHeight: 400,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "background.paper", // theme-aware
              color: "text.primary",
            }}
          >
            <Box
              component="img"
              src="/images/product1-logo.jpg"
              alt="FLAREX Logo"
              sx={{ height: 120, mb: 3, display: "block" }}
            />

            <Typography variant="h5" fontWeight={800} gutterBottom>
              FLAREX
            </Typography>

            <Divider sx={{ width: "60%", my: 2, borderColor: "divider" }} />

            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                lineHeight: 1.6,
                color: "text.secondary",
                textAlign: "center",
                maxWidth: 780,
              }}
            >
              Our innovative product, FLAREX, conducts research on Space Weather,
              with a specific focus on Solar Flares. It examines the impact of
              these events on Earth’s Upper Atmosphere, Earth’s Geomagnetic Field,
              and Satellite Communication Disruptions.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurProductsPage;
