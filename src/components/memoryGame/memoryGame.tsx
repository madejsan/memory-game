import { ROUTES } from '@constants/routes';
import Logo from '@images/betbull.png';
import { Box, Card, Fade, Grid, makeStyles, Typography } from '@material-ui/core';
import { H1 } from '@styles/heading.styles';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { styles } from './memoryGame.styles';
import { CardProps, MemoryGameProps } from './memoryGame.types';
import { calculateTime, generateCards, matchedPair, rejectPair, stopGame } from './memoryGame.utils';
import { MemoryGameResult } from './memoryGameResult/memoryGameResult';

const useStyles = makeStyles(styles);
const ADDITION = 1000;
const REDUCTION = -500;
const DATE_FORMAT = 'dd/MM/yyyy';

const MemoryGame = (props: MemoryGameProps) => {
  const history = useHistory();
  const classes = useStyles();
  const [seconds, setSeconds] = useState<number>(5);
  const [playerVisibility, setPlayerVisibility] = useState<boolean>(false);
  const [endGame, setEndGame] = useState<boolean>(false);
  const [timer, setTimer] = useState({ start: new Date(), end: null });
  const [cards, setCards] = useState<CardProps[]>(generateCards());
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [score, setScore] = useState<number>(0);
  const { player, saveResults } = props;

  useEffect(() => {
    if (!player) history.push(ROUTES.HOME);
  }, []);

  useEffect(() => {
    const end = stopGame(cards);
    if (end) {
      setEndGame(true);
      setTimer((prev) => {
        return Object.assign({}, prev, { end: new Date() });
      });
    }
  }, [cards]);

  const hideCards = () => {
    const newCards = [...cards].map((card: CardProps) =>
      card.success ? card : { ...card, flipped: false, disabled: false }
    );
    setCards(newCards);
  };

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setPlayerVisibility((prev) => !prev);
      hideCards();
    }
  }, [seconds]);

  const checkSelected = (cardId: number) => {
    const updatedSelectedCards = [...selectedCards, cardId];

    if (updatedSelectedCards.length === 2) {
      const matched = matchedPair(updatedSelectedCards);
      setScore((prev: number) => {
        const points = matched ? ADDITION : REDUCTION;
        return prev + points;
      });
      if (matched) {
        const updatedCards = rejectPair(cards, cardId);
        setCards(updatedCards);
      } else {
        setTimeout(() => {
          hideCards();
        }, 600);
      }
      setSelectedCards([]);
    } else {
      setSelectedCards(updatedSelectedCards);
    }
  };

  const handleCardClick = (cardIndex: number, cardId: number) => {
    const newCards = [...cards];
    newCards[cardIndex] = Object.assign({}, newCards[cardIndex], {
      flipped: !newCards[cardIndex].flipped,
      disabled: !newCards[cardIndex].disabled
    });
    setCards(newCards);
    checkSelected(cardId);
  };

  const handleSave = () => {
    const time = calculateTime(timer);
    const date = format(new Date(), DATE_FORMAT);
    saveResults({ score, time, date });
    history.push(ROUTES.SCORES);
  };

  const renderCounter = () => {
    if (playerVisibility) {
      return (
        <Box className={classes.infoBox}>
          <H1>Player:</H1>
          <Typography>{player}</Typography>
        </Box>
      );
    } else {
      return (
        <Box className={classes.countdown}>
          <H1>{seconds}</H1>
        </Box>
      );
    }
  };

  return (
    <Fade in={true} mountOnEnter unmountOnExit>
      {endGame ? (
        <Box className={classes.result}>
          <MemoryGameResult score={score} handleSave={handleSave} />
        </Box>
      ) : (
        <Box>
          <Grid container alignItems='center'>
            <Grid item lg={2} md={2} sm={12} xs={12}>
              <Box className={classes.countdownWrapper}>{renderCounter}</Box>
            </Grid>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <Box className={classes.grid} justifyContent='center'>
                {cards.map(({ id, flipped, disabled, success, image }, index) => (
                  <Card
                    key={`card${index}`}
                    className={`
                    ${classes.card} ${disabled ? 'disabled' : ''}
                    ${flipped ? 'flipped' : ''}
                    ${success ? 'success' : ''}
                  `}
                    onClick={() => handleCardClick(index, id)}
                  >
                    <Box className={classes.front}>
                      <img src={Logo} alt='logo' />
                    </Box>
                    <Box className={classes.back}>
                      <img src={image} />
                    </Box>
                  </Card>
                ))}
              </Box>
            </Grid>
            <Grid item lg={2} md={2} sm={12} xs={12}>
              <Box className={classes.scoreBox}>
                <H1>Score</H1>
                <Typography>{score}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </Fade>
  );
};

export default MemoryGame;
