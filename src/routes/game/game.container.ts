import { ScoresActions } from '@modules/scores/scores.redux';
import { UserActions } from '@modules/user/user.redux';
import { selectUser } from '@modules/user/user.selectors';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import Game from './game';

const mapStateToProps = createStructuredSelector({ user: selectUser });

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      saveScore: ScoresActions.create,
      clearUser: UserActions.clear
    },
    dispatch
  );

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Game);
