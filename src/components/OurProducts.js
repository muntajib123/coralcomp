// src/components/ProductsSection.js
import React from 'react';
import {
  Box,
  Typography,
  Breadcrumbs,
  Link,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ProductsSection = () => {
  return (
    <Box sx={{ background: 'linear-gradient(to right, #f4f7fa, #ffffff)', pb: 6 }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: 300,
          position: 'relative',
          backgroundImage: 'url(/images/consulting-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        role="img"
        aria-label="Our Products Banner"
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            textAlign: 'center',
            px: 2,
          }}
          data-aos="fade-down"
        >
          <Box>
            <Typography variant="h4" fontWeight="bold">
              OUR PRODUCTS
            </Typography>
            <Typography variant="h6">
              Innovative Solutions for Modern Challenges
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Scroll Down Indicator */}
      <Box sx={{ textAlign: 'center', mt: 1 }} data-aos="fade-down">
        <KeyboardArrowDownIcon
          fontSize="large"
          sx={{
            color: '#555',
            animation: 'bounce 2s infinite',
          }}
          aria-label="Scroll down indicator"
        />
      </Box>

      {/* Breadcrumbs */}
      <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 3, px: { xs: 2, md: 4 } }}>
        <Link component={RouterLink} to="/" underline="hover" color="inherit">
          Home
        </Link>
        <Typography color="text.primary">Our Products</Typography>
      </Breadcrumbs>

      {/* Product Cards */}
      <Box
        sx={{
          display: 'flex',
          gap: 4,
          mt: 5,
          px: { xs: 2, md: 4 },
          flexWrap: 'wrap',
          justifyContent: 'center',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        {/* Met 360 */}
        <Card
          sx={{
            maxWidth: 345,
            flex: 1,
            minWidth: 280,
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: 6,
            },
          }}
          data-aos="zoom-in-up"
        >
          <CardContent sx={{ textAlign: 'center' }}>
            <Box
              component="img"
              src="/images/met360-logo.png"
              alt="Met 360 logo"
              sx={{ height: 60, mb: 1 }}
            />
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Met 360
            </Typography>
            <Typography variant="body2">
              27-day geomagnetic and solar weather prediction product using advanced AI models.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button component={RouterLink} to="/products/met360" size="small">
              Learn More
            </Button>
          </CardActions>
        </Card>

        {/* Flarex */}
        <Card
          sx={{
            maxWidth: 345,
            flex: 1,
            minWidth: 280,
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: 6,
            },
          }}
          data-aos="zoom-in-up"
        >
          <CardContent sx={{ textAlign: 'center' }}>
            <Box
              component="img"
              src="/images/flarex-logo.png"
              alt="Flarex logo"
              sx={{ height: 60, mb: 1 }}
            />
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Flarex
            </Typography>
            <Typography variant="body2">
              Real-time solar flare detection and alerting system designed for reliability and uptime.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button component={RouterLink} to="/products/flarex" size="small">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Box>

      {/* Call to Action */}
      <Box sx={{ mt: 8, textAlign: 'center', px: 2 }} data-aos="fade-up">
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Interested in Our Innovations?
        </Typography>
        <Button
          variant="contained"
          size="large"
          component={RouterLink}
          to="/contact"
          sx={{
            mt: 2,
            background: 'linear-gradient(to right, #1976d2, #0d47a1)',
            color: '#fff',
            '&:hover': {
              background: 'linear-gradient(to right, #1565c0, #0b3c91)',
            },
          }}
        >
          Contact Us
        </Button>
      </Box>

      {/* Bounce Animation Keyframes */}
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(6px); }
            60% { transform: translateY(3px); }
          }
        `}
      </style>
    </Box>
  );
};

export default ProductsSection;
