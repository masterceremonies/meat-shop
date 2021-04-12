import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles } from '@material-ui/core/styles';
import StorefrontIcon from '@material-ui/icons/Storefront';

const useStyles = makeStyles((theme) => ({
  logo: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    background: '#AA3C3B'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static"  className={classes.appBar} >
      <Toolbar >
        <StorefrontIcon fontSize="large" className={classes.logo}/>
        <Typography className={classes.title} variant="h5" noWrap>
          Meat shop - Product List
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;