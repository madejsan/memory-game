import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { black, buttonBorderRadius, fontWeightBold, transitionDuration, webOrange, white } from '@theme/variables';

export const PrimaryButton = withStyles({
  root: {
    border: 'solid 1px',
    borderRadius: buttonBorderRadius,
    color: black,
    padding: '0 76px 0 30px',
    height: 54,
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: fontWeightBold,
    textTransform: 'none',
    background: webOrange,
    borderColor: webOrange,
    transitionDuration,
    transitionProperty: 'all',
    '&.Mui-disabled': {
      opacity: 0
    },
    '& .MuiButton-label': {
      color: black,
      transitionDuration,
      '& a': {
        color: white,
        textDecoration: 'none'
      }
    },
    '& .MuiButton-endIcon': {
      background: webOrange,
      width: '38px',
      height: '38px',
      borderRadius: '100%',
      position: 'absolute',
      right: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: 0,
      bottom: 0,
      margin: 'auto',
      transitionDuration,
      '& .MuiIcon-root': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& svg': {
          '& path': {
            stroke: webOrange
          }
        }
      }
    },
    '&:hover': {
      color: webOrange,
      background: 'transparent',
      '& .MuiButton-endIcon': {
        background: 'transparent',
        '& .MuiIcon-root': {
          '& svg': {
            '& path': {
              fill: webOrange
            }
          }
        }
      },
      '& .MuiButton-label': {
        color: webOrange,
        '& a': {
          color: webOrange
        }
      }
    }
  }
})(Button);
