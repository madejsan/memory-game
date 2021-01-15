import EH from '@images/hazard.png';
import KM from '@images/mbappe.png';
import LM from '@images/messi.png';
import NJ from '@images/neymar.png';
import SR from '@images/ramos.png';
import RL from '@images/rl.png';
import JS from '@images/sancho.png';
import BS from '@images/silva.png';
import { differenceInMilliseconds } from 'date-fns';

import { CardProps, TimerProps } from './memoryGame.types';

export const generateCards = () => {
  const cardsSet = [RL, SR, NJ, LM, KM, BS, JS, EH].map((card: string, index: number) =>
    Array(2).fill({
      id: index,
      image: card,
      flipped: true,
      disabled: true,
      success: false
    })
  );

  const flattenArray = cardsSet.flat() as CardProps[];
  return flattenArray.sort(() => Math.random() - 0.5);
};

export const formatMilisecondsToMinutesAndSeconds = (miliseconds: number) => {
  const minutes = Number(Math.floor(miliseconds / 60000)) * -1;
  const seconds = Number((((miliseconds % 60000) / 1000) * -1).toFixed(0));

  return minutes + 'm' + seconds + 's';
};

export const matchedPair = (cards) => [...new Set(cards)].length === 1;

export const rejectPair = (cards: CardProps[], cardId: number) =>
  cards.map((card) => (card.id !== cardId ? card : { ...card, flipped: false, disabled: true, success: true }));

export const stopGame = (cards: CardProps[]) => cards.filter((card) => !card.success).length === 0;

export const calculateTime = (timer: TimerProps) => {
  const { start, end } = timer;
  const difference = differenceInMilliseconds(start, end);

  return formatMilisecondsToMinutesAndSeconds(difference);
};
