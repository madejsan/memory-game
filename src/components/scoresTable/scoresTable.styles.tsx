import { white } from '@theme/variables';

export const styles = () => ({
  '@keyframes rotate': {
    '0%': {
      transform: 'rotate(0)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  },
  root: {
    background: 'transparent'
  },
  heading: {
    '& svg': {
      maxWidth: '50px',
      marginBottom: '20px',
      animation: '$rotate 20s linear infinite'
    }
  },
  table: {
    '& .MuiTableCell-head': {
      color: white
    },
    '& .MuiTableCell-body': {
      color: white
    }
  }
});
