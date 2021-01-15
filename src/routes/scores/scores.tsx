import ScoresTable from '@components/scoresTable/scoresTable.loadable';
import { Box, Fade, Grid, Slide } from '@material-ui/core';
import React, { PureComponent } from 'react';

import { ScoresProps } from './scores.types';

class ScoresPage extends PureComponent<ScoresProps> {
  render() {
    const { scores } = this.props;
    return (
      <Fade in={true} mountOnEnter unmountOnExit>
        <Box display='flex' justifyContent='center' alignItems='center' height='100vh' textAlign='center'>
          <Slide in={true} direction='left' timeout={{ enter: 900, exit: 900 }} mountOnEnter unmountOnExit>
            <Grid container alignItems='center'>
              <Grid item lg={8} md={8} sm={8} xs={12}>
                <ScoresTable scores={scores} />
              </Grid>
            </Grid>
          </Slide>
        </Box>
      </Fade>
    );
  }
}

export default ScoresPage;
