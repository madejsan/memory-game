export const styles = (theme) => ({
  root: {
    display: 'flex',
    background: 'rgba(29,36,56,0.6)',
    zIndex: 1,
    position: 'relative' as 'relative',
    minHeight: '100vh',
    '& #tsparticles': {
      position: 'fixed',
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
      zIndex: 0
    }
  },
  content: {
    flexGrow: 1,
    width: '100%',
    zIndex: 2,
    position: 'relative' as 'relative',
    [theme.breakpoints.up('sm')]: {
      padding: '50px'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '30px 15px 15px'
    }
  },
  childrenWrapper: {
    height: '100%'
  }
});
