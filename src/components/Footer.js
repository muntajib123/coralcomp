import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Container,
  Link as MuiLink,
  Stack
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X'; // Twitter/X icon
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#003366',
        color: '#fff',
        py: 4,
        px: 2,
        mt: 6,
        textAlign: 'center'
      }}
    >
      <Container maxWidth="lg">
        {/* Company Info */}
        <Typography variant="body2" sx={{ mb: 2 }}>
          &copy; {currentYear} CoralComp Private Limited. All rights reserved.
        </Typography>

        {/* Quick Links */}
        <Stack
          direction="row"
          justifyContent="center"
          spacing={3}
          flexWrap="wrap"
          sx={{ mb: 2 }}
        >
          <MuiLink
            component={RouterLink}
            to="/"
            underline="hover"
            color="inherit"
          >
            Home
          </MuiLink>
          <MuiLink
            component={RouterLink}
            to="/about"
            underline="hover"
            color="inherit"
          >
            About
          </MuiLink>
          <MuiLink
            component={RouterLink}
            to="/contact"
            underline="hover"
            color="inherit"
          >
            Contact
          </MuiLink>
        </Stack>

        {/* Social Media Icons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
          <IconButton
            component="a"
            href="https://www.facebook.com/profile.php?id=100065191590468&_rdr"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
            aria-label="Facebook"
            sx={{ color: '#fff' }}
          >
            <FacebookIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://www.linkedin.com/company/coralcomp/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            aria-label="LinkedIn"
            sx={{ color: '#fff' }}
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://x.com/BakthyarSyed"
            target="_blank"
            rel="noopener noreferrer"
            title="X"
            aria-label="X"
            sx={{ color: '#fff' }}
          >
            <XIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
