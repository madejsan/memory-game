import { Navigation } from '@components/navigation/navigation';
import { Box, makeStyles } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import Particles, { IParticlesParams } from 'react-particles-js';

import { styles } from './layout.styles';
import { LayoutProps } from './layout.types';
import { particlesConfig } from './layout.utils';

const useStyles = makeStyles(styles);

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navigation />
      <main className={classes.content}>
        <Box className={classes.childrenWrapper}>{children}</Box>
      </main>
      <Particles params={particlesConfig as IParticlesParams} />
    </div>
  );
};

export default Layout;
