import { mirage, transitionDuration, webOrange, white } from '@theme/variables';

export const styles = (theme) => ({
  appBar: {
    zIndex: 10,
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      boxShadow: 'none',
      backgroundColor: 'transparent'
    },
    [theme.breakpoints.down('sm')]: {
      backgroundColor: mirage
    }
  },
  toolbar: {
    ...theme.mixins.toolbar,
    backgroundColor: 'transparent',
    padding: '10px 15px',
    '& img': {
      maxHeight: '60px'
    },
    [theme.breakpoints.down('sm')]: {
      height: '75px',
      '& img': {
        maxHeight: '50px'
      }
    }
  },
  menu: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    '& a': {
      color: white,
      marginRight: '30px',
      transitionDuration,
      '&:hover, &.active': {
        color: webOrange
      }
    }
  }
});
