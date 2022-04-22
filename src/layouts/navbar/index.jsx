import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="warning">
        <Toolbar>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Avatar src="img/logo.jpg" />
            </IconButton>{' '}
          </Link>
          <Box sx={{ flexGrow: '1 1' }} />
          <Box sx={{ ml: 'auto', display: 'flex' }}>
            <Link to="cart">
              <IconButton size="large" onClick={() => {}} color="inherit">
                <ShoppingCartIcon />
              </IconButton>{' '}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <div id = 'content'>
        <Outlet />
      </div>
    </Box>
  );
};
