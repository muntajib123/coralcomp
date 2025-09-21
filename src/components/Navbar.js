// src/components/Navbar.js
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Tooltip,
  Button,
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar = ({ mode, setMode }) => {
  const location = useLocation();

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar position="static" sx={{ backgroundColor: '#003366' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left Side: Logo + Brand + Our Products */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Logo + Brand */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <Box
              component="img"
              src="/images/coral-logo.png"
              alt="CoralComp Logo"
              sx={{ height: 32, width: 'auto', mr: 1 }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                letterSpacing: '0.5px',
                fontSize: '1.2rem',
              }}
            >
              CoralComp
            </Typography>
          </Box>

          {/* Our Products (moved left, no arrow) */}
          <Button
            component={RouterLink}
            to="/products"
            sx={{
              color: '#fff',
              textTransform: 'uppercase',
              fontWeight: isActive('/products') ? 'bold' : 'normal',
              borderBottom: isActive('/products') ? '2px solid #fff' : 'none',
              borderRadius: 0,
            }}
            aria-label="Our Products"
          >
            Our Products
          </Button>
        </Box>

        {/* Right Side: Other Nav Links + Theme Toggle */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {[
            { label: 'Home', path: '/' },
            { label: 'About', path: '/about' },
            { label: 'History', path: '/history' },
            { label: 'Contact', path: '/contact' },
          ].map(({ label, path }) => (
            <Button
              key={label}
              component={RouterLink}
              to={path}
              sx={{
                color: '#fff',
                fontWeight: isActive(path) ? 'bold' : 'normal',
                borderBottom: isActive(path) ? '2px solid #fff' : 'none',
                borderRadius: 0,
              }}
            >
              {label}
            </Button>
          ))}

          {/* Dark/Light Mode Toggle */}
          <Tooltip title={mode === 'light' ? 'Dark Mode' : 'Light Mode'}>
            <IconButton sx={{ ml: 1, color: '#fff' }} onClick={toggleTheme}>
              {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
