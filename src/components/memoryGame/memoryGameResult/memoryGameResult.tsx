import { ROUTES } from '@constants/routes';
import Whistle from '@images/whistle.png';
import { Box, Icon, makeStyles, Slide, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import SyncIcon from '@material-ui/icons/Sync';
import { PrimaryButton } from '@styles/button.styles';
import { H1, H3 } from '@styles/heading.styles';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { styles } from './memoryGameResult.styles';
import { MemoryGameResultProps } from './memoryGameResult.types';

const useStyles = makeStyles(styles);

export const MemoryGameResult = (props: MemoryGameResultProps) => {
  const classes = useStyles();
  const history = useHistory();
  const { score, handleSave } = props;

  const redirectToHomepage = () => {
    history.push(ROUTES.HOME);
  };

  return (
    <Slide in={true} direction='left' timeout={{ enter: 900, exit: 900 }} mountOnEnter unmountOnExit>
      <Box>
        <img src={Whistle} alt='whistle' />
        {score > 0 ? (
          <Box>
            <Box mb={6}>
              <H1>Congrats!</H1>
            </Box>
            <Box mb={6}>
              <H3>Your score: {score}</H3>
            </Box>
            <PrimaryButton
              onClick={handleSave}
              endIcon={
                <Icon>
                  <CheckIcon />
                </Icon>
              }
            >
              Save result
            </PrimaryButton>
          </Box>
        ) : (
          <Box>
            <Box>
              <Typography className={classes.info}>Thanks for playing!</Typography>
            </Box>
            <PrimaryButton
              onClick={redirectToHomepage}
              endIcon={
                <Icon>
                  <SyncIcon />
                </Icon>
              }
            >
              Try again
            </PrimaryButton>
          </Box>
        )}
      </Box>
    </Slide>
  );
};
