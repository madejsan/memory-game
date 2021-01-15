import Logo from '@images/betbull.png';
import { AppBar, Box, Grid, makeStyles, Toolbar } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { styles } from './navigation.styles';
import { menuItems } from './navigation.utils';

const useStyles = makeStyles(styles);

export const Navigation: FunctionComponent = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Box display='flex' width='100%' justifyContent='flex-end' alignItems='center'>
          <Grid container>
            <Grid item xl={1} lg={1} md={2} sm={2} xs={3}>
              <img src={Logo} alt='logo' />
            </Grid>
            <Grid item xl={11} lg={11} md={10} sm={10} xs={9}>
              <Box className={classes.menu}>
                {menuItems.map((item, index) => (
                  <Link key={index} to={item.link} className={location.pathname === item.link ? 'active' : ''}>
                    {item.name}
                  </Link>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
