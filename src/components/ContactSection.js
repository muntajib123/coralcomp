// src/components/ContactSection.js
import React from 'react';
import {
  Box,
  Typography,
  Grid,
  useTheme,
  Link,
  IconButton,
  Divider,
  Paper,
  SvgIcon,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link as RouterLink } from 'react-router-dom';

// X (Twitter) Icon SVG
const XIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M22.25 2H1.75C.78 2 0 2.78 0 3.75v16.5C0 21.22.78 22 1.75 22h20.5c.97 0 1.75-.78 1.75-1.75V3.75C24 2.78 23.22 2 22.25 2zM16.79 16.45h-2.14l-3.3-4.22-3.3 4.22H5.91l4.53-5.73L5.91 7.55h2.14l3.3 4.22 3.3-4.22h2.14l-4.53 5.73 4.53 5.73z" />
  </SvgIcon>
);

const ContactSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, sm: 4, md: 6 },
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
      id="contact"
    >
      <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" textAlign="center" sx={{ mb: 5 }}>
        Contact us, we'll get back to you within 24hrs!
      </Typography>

      <Grid container justifyContent="center">
        {/* Centered company info card (replaces the left form + keeps the right card) */}
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              CoralComp Private Limited
            </Typography>

            <Typography variant="body2" gutterBottom>
              T-Hub Building, IIIT Hyderabad Campus,
              <br />
              Gachibowli, Hyderabad, Telangana - 500032
            </Typography>

            <Typography variant="body2" gutterBottom>
              Phone:{' '}
              <Link href="tel:+919160307183" underline="hover">
                +91 9160307183
              </Link>
              <br />
              Email:{' '}
              <Link href="mailto:info@coralcomp.com" underline="hover">
                info@coralcomp.com
              </Link>
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mb: 2 }}>
              <Link component={RouterLink} to="/" underline="hover" color="inherit">
                Home
              </Link>
              <Link component={RouterLink} to="/about" underline="hover" color="inherit">
                About Us
              </Link>
            </Box>

            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ mb: 2 }}>
              <IconButton
                component="a"
                href="https://www.facebook.com/profile.php?id=100065191590468&_rdr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                sx={{ color: theme.palette.text.primary }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/company/coralcomp/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                sx={{ color: theme.palette.text.primary }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://x.com/BakthyarSyed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                sx={{ color: theme.palette.text.primary }}
              >
                <XIcon />
              </IconButton>
            </Box>

            <Box sx={{ borderRadius: 2, overflow: 'hidden', mt: 2 }}>
              <iframe
                title="CoralComp Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.472375586557!2d78.34763521515841!3d17.44422098804464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93de41d1d92d%3A0x81b66c71e54699e6!2sT-Hub!5e0!3m2!1sen!2sin!4v1690849391234!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
