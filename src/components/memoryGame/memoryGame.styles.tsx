import { fontWeightBold, inputBorderRadius, webOrange, white } from '@theme/variables';

export const styles = (theme) => ({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 125px)',
    gridTemplateRows: 'repeat(4, 125px)',
    gap: '15px',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(4, 75px)',
      gridTemplateRows: 'repeat(4, 75px)',
      marginBottom: '30px',
      gap: '5px'
    }
  },
  card: {
    position: 'relative' as 'relative',
    background: 'transparent',
    border: `solid 1px ${white}`,
    height: '100%',
    borderRadius: inputBorderRadius,
    transition: 'all 0.6s ease',
    transformStyle: 'preserve-3d' as 'preserve-3d',
    cursor: 'pointer',
    userSelect: 'none' as 'none',
    '& img': {
      maxHeight: '100%'
    },
    '&.flipped': {
      transform: 'rotateY(180deg)',
      '& > div:first-of-type': {
        transform: 'rotateY(180deg)'
      },
      '& > div:last-of-type': {
        transform: 'rotateY(0deg) scaleX(-1)'
      }
    },
    '&.disabled': {
      pointerEvents: 'none'
    },
    '&.success': {
      opacity: 0.2
    }
  },
  front: {
    background: 'transparent',
    width: '100%',
    height: '100%',
    position: 'absolute' as 'absolute',
    backfaceVisibility: 'hidden' as 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'rotateY(0deg)',
    '& img': {
      maxWidth: '70px'
    },
    [theme.breakpoints.down('sm')]: {
      '& img': {
        maxWidth: '40px'
      }
    }
  },
  back: {
    background: 'transparent',
    width: '100%',
    height: '100%',
    position: 'absolute' as 'absolute',
    backfaceVisibility: 'hidden' as 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'rotateY(180deg)'
  },
  countdownWrapper: {
    minHeight: '120px',
    [theme.breakpoints.down('sm')]: {
      minHeight: 'auto',
      height: '80px',
      marginBottom: '30px'
    }
  },
  countdown: {
    '& p:first-of-type': {
      fontWeight: fontWeightBold,
      fontSize: '64px',
      color: white
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
      minHeight: '100px'
    }
  },
  infoBox: {
    '& p:first-of-type': {
      fontWeight: fontWeightBold,
      fontSize: '42px',
      color: white
    },
    '& p:last-of-type': {
      fontWeight: fontWeightBold,
      fontSize: '42px',
      color: webOrange
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: '100px'
    }
  },
  scoreBox: {
    '& p:first-of-type': {
      fontWeight: fontWeightBold,
      fontSize: '42px',
      color: white
    },
    '& p:last-of-type': {
      fontWeight: fontWeightBold,
      fontSize: '64px',
      color: webOrange
    }
  },
  result: {
    '& img': {
      maxWidth: '70px'
    }
  }
});
