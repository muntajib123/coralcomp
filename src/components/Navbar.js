import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  IconButton,
  Tooltip,
} from '@mui/material';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar = ({ mode, setMode }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDropdownOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const handleProductsClick = () => {
    navigate('/products');
    handleDropdownClose();
  };

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar position="static" sx={{ backgroundColor: '#003366' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
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

        {/* Navigation Links */}
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

          {/* Our Products Split Button */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              onClick={handleProductsClick}
              sx={{
                color: '#fff',
                textTransform: 'uppercase',
                fontWeight: isActive('/products') ? 'bold' : 'normal',
                borderBottom: isActive('/products') ? '2px solid #fff' : 'none',
                borderRadius: 0,
              }}
            >
              Our Products
            </Button>
            <IconButton
              onClick={handleDropdownOpen}
              sx={{ color: '#fff', p: 0, ml: 0.5 }}
              size="small"
              aria-controls={anchorEl ? 'products-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={anchorEl ? 'true' : undefined}
            >
              <ArrowDropDownIcon />
            </IconButton>
            <Menu
              id="products-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleDropdownClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
              <MenuItem
                component={RouterLink}
                to="/products/met360"
                onClick={handleDropdownClose}
                sx={{ textTransform: 'uppercase' }}
              >
                Met 360
              </MenuItem>
              <MenuItem
                component={RouterLink}
                to="/products/flarex"
                onClick={handleDropdownClose}
                sx={{ textTransform: 'uppercase' }}
              >
                Flarex
              </MenuItem>
            </Menu>
          </Box>

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
