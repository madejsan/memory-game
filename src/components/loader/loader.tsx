import { Box, CircularProgress } from '@material-ui/core';
import React, { FunctionComponent } from 'react';

export const Loader: FunctionComponent = () => (
  <Box display='flex' justifyContent='center' alignItems='center' height='100%'>
    <CircularProgress color='secondary' />
  </Box>
);
