import { selectScores } from '@modules/scores/scores.selectors';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';

import Scores from './scores';

const mapStateToProps = createStructuredSelector({ scores: selectScores });

export default compose(withRouter, connect(mapStateToProps, null))(Scores);
