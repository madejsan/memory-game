import { OutlinedInput } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { inputBorderRadius, white } from '@theme/variables';

export const StyledOutlinedInput = withStyles({
  root: {
    width: '100%',
    borderRadius: inputBorderRadius,
    '& .MuiInputBase-input': {
      padding: '17px 20px',
      borderRadius: inputBorderRadius,
      color: white,
      fontSize: '14px',
      lineHeight: '17px',
      background: 'transparent',
      height: '100%'
    },
    '& fieldset': {
      transitionProperty: 'border',
      transitionDuration: '0.6s'
    },
    '&.Mui-focused, &:hover': {
      borderColor: white,
      borderWidth: '1px',
      color: white,
      '& fieldset': {
        border: `solid 1px ${white} !important`,
        borderColor: white,
        borderWidth: '1px',
        height: '100%',
        padding: '0',
        top: '0',
        boxShadow: 'none',
        '& legend': {
          display: 'none !important'
        }
      }
    }
  },
  notchedOutline: {
    borderColor: white,
    borderWidth: '1px !important',
    padding: '0 !important'
  }
})(OutlinedInput);
