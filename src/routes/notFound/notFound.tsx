import Logo from '@images/betbull.png';
import { Box, Fade, Grid, Slide } from '@material-ui/core';
import { H1 } from '@styles/heading.styles';
import React, { FunctionComponent } from 'react';

const NotFoundPage: FunctionComponent = () => {
  return (
    <Fade in={true} mountOnEnter unmountOnExit>
      <Box display='flex' justifyContent='center' alignItems='center' height='100vh' textAlign='center'>
        <Slide in={true} direction='left' timeout={{ enter: 900, exit: 900 }} mountOnEnter unmountOnExit>
          <Grid container alignItems='center'>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box mb={4}>
                <img src={Logo} alt='logo' />
              </Box>
              <Box mb={4}>
                <H1>404</H1>
              </Box>
            </Grid>
          </Grid>
        </Slide>
      </Box>
    </Fade>
  );
};

export default NotFoundPage;
