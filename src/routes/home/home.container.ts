import { UserActions } from '@modules/user/user.redux';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';

import Home from './home';

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      create: UserActions.create
    },
    dispatch
  );

export default compose(withRouter, connect(null, mapDispatchToProps))(Home);
