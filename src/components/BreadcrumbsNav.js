// src/components/BreadcrumbsNav.js
import React from 'react';
import { Breadcrumbs, Link, Typography, Box } from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';

const BreadcrumbsNav = () => {
  const location = useLocation();

  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Box sx={{ p: 2 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" component={RouterLink} to="/">
          Home
        </Link>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const label = value.charAt(0).toUpperCase() + value.slice(1);
          return isLast ? (
            <Typography color="text.primary" key={to}>
              {label}
            </Typography>
          ) : (
            <Link underline="hover" color="inherit" component={RouterLink} to={to} key={to}>
              {label}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumbsNav;
