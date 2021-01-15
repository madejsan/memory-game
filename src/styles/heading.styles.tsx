import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import { fontWeightBold, white } from '@theme/variables';

export const H1 = withStyles((theme) => ({
  root: {
    color: white,
    fontSize: '40px',
    lineHeight: '48px',
    fontWeight: fontWeightBold,
    [theme.breakpoints.down('xs')]: {
      fontSize: '24px',
      lineHeight: '32px'
    }
  }
}))(Typography);

export const H3 = withStyles(() => ({
  root: {
    color: white,
    fontSize: '22px',
    lineHeight: '27px',
    fontWeight: fontWeightBold
  }
}))(Typography);

export const H4 = withStyles(() => ({
  root: {
    color: white,
    fontSize: '18px',
    lineHeight: '22px',
    fontWeight: fontWeightBold
  }
}))(Typography);
