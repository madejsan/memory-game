import UefaIcon from '@icons/uefa.svg';
import {
  Box,
  Fade,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core';
import { ScoresProps } from '@routes/scores/scores.types';
import { H1 } from '@styles/heading.styles';
import React from 'react';

import { styles } from './scoresTable.styles';
import { headers, sortScores } from './scoresTable.utils';

const useStyles = makeStyles(styles);

const ScoresTable = ({ scores = [] }: ScoresProps) => {
  const classes = useStyles();

  return (
    <Fade in={true} mountOnEnter unmountOnExit>
      <Box>
        <Box className={classes.heading}>
          <UefaIcon />
          <H1>Top 5 Players</H1>
        </Box>
        <TableContainer className={classes.root} component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                {headers.map((item, index) => (
                  <TableCell key={index} align={index > 0 ? 'right' : 'left'}>
                    {item.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {scores.length > 0 ? (
                sortScores(scores).map(({ user, score, time, date }, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell align='right'>{user}</TableCell>
                    <TableCell align='right'>{score}</TableCell>
                    <TableCell align='right'>{time}</TableCell>
                    <TableCell align='right'>{date}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align='center'>
                    No results found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Fade>
  );
};

export default ScoresTable;
