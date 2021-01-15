import MemoryGame from '@components/memoryGame/memoryGame.loadable';
import { Box, Fade, Slide } from '@material-ui/core';
import React, { PureComponent } from 'react';

import { GameProps, ResultProps } from './game.types';

class GamePage extends PureComponent<GameProps> {
  saveResults = (data: ResultProps) => {
    const { user, saveScore, clearUser } = this.props;
    const { score, time, date } = data;

    saveScore({ user, score, time, date });
    clearUser();
  };

  render() {
    const { user } = this.props;

    return (
      <Fade in={true} mountOnEnter unmountOnExit>
        <Box display='flex' justifyContent='center' alignItems='center' height='100vh' textAlign='center'>
          <Slide in={true} direction='left' timeout={{ enter: 900, exit: 900 }} mountOnEnter unmountOnExit>
            <Box width='100%'>
              <MemoryGame player={user} saveResults={this.saveResults} />
            </Box>
          </Slide>
        </Box>
      </Fade>
    );
  }
}

export default GamePage;
